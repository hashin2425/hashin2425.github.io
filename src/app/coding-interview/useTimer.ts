import { useState, useEffect, useRef, useCallback } from "react";
import { TimerState, UseTimerReturn, DEFAULT_TOTAL_DURATION } from "./timer";

const STORAGE_KEY = "coding-interview-timer";

export const useTimer = (): UseTimerReturn => {
  const [state, setState] = useState<TimerState>({
    isRunning: false,
    isPaused: false,
    elapsedTime: 0,
    startTime: null,
    pausedTime: 0,
    totalDuration: DEFAULT_TOTAL_DURATION,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // LocalStorageから状態を復元
  const loadFromStorage = useCallback(() => {
    if (typeof window === "undefined") return;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedState: TimerState = JSON.parse(saved);

        // 後方互換性: totalDurationが存在しない場合はデフォルト値を設定
        if (!parsedState.totalDuration) {
          parsedState.totalDuration = DEFAULT_TOTAL_DURATION;
        }

        // 実行中の場合、現在時刻から経過時間を再計算
        if (parsedState.isRunning && !parsedState.isPaused && parsedState.startTime) {
          const now = Date.now();
          const realElapsed = Math.floor((now - parsedState.startTime - parsedState.pausedTime) / 1000);

          setState({
            ...parsedState,
            elapsedTime: Math.min(realElapsed, parsedState.totalDuration),
          });
        } else {
          setState(parsedState);
        }
      }
    } catch (error) {
      console.error("Failed to load timer state from localStorage:", error);
    }
  }, []);

  // LocalStorageに状態を保存
  const saveToStorage = useCallback((newState: TimerState) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.error("Failed to save timer state to localStorage:", error);
    }
  }, []);

  // タイマーの更新
  const updateTimer = useCallback(() => {
    setState((prevState) => {
      if (!prevState.isRunning || prevState.isPaused || !prevState.startTime) {
        return prevState;
      }

      const now = Date.now();
      const elapsed = Math.floor((now - prevState.startTime - prevState.pausedTime) / 1000);
      const newElapsed = Math.min(elapsed, prevState.totalDuration);

      const newState = {
        ...prevState,
        elapsedTime: newElapsed,
      };

      // 設定時間経過したら自動停止
      if (newElapsed >= prevState.totalDuration) {
        newState.isRunning = false;
      }

      saveToStorage(newState);
      return newState;
    });
  }, [saveToStorage]);

  // タイマー開始
  const start = useCallback(() => {
    const now = Date.now();
    const newState: TimerState = {
      isRunning: true,
      isPaused: false,
      elapsedTime: 0,
      startTime: now,
      pausedTime: 0,
      totalDuration: state.totalDuration,
    };

    setState(newState);
    saveToStorage(newState);
  }, [saveToStorage, state.totalDuration]);

  // タイマー一時停止
  const pause = useCallback(() => {
    setState((prevState) => {
      if (!prevState.isRunning || prevState.isPaused) return prevState;

      const newState = {
        ...prevState,
        isPaused: true,
      };

      saveToStorage(newState);
      return newState;
    });
  }, [saveToStorage]);

  // タイマー再開
  const resume = useCallback(() => {
    setState((prevState) => {
      if (!prevState.isRunning || !prevState.isPaused || !prevState.startTime) return prevState;

      const now = Date.now();
      const pauseDuration = now - prevState.startTime - prevState.elapsedTime * 1000 - prevState.pausedTime;

      const newState = {
        ...prevState,
        isPaused: false,
        pausedTime: prevState.pausedTime + pauseDuration,
      };

      saveToStorage(newState);
      return newState;
    });
  }, [saveToStorage]);

  // タイマーリセット
  const reset = useCallback(() => {
    const newState: TimerState = {
      isRunning: false,
      isPaused: false,
      elapsedTime: 0,
      startTime: null,
      pausedTime: 0,
      totalDuration: state.totalDuration,
    };

    setState(newState);
    saveToStorage(newState);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [saveToStorage, state.totalDuration]);

  // 手動時間設定
  const setTime = useCallback(
    (seconds: number) => {
      setState((prevState) => {
        const clampedSeconds = Math.max(0, Math.min(seconds, prevState.totalDuration));

        let newState: TimerState;

        if (prevState.isRunning && !prevState.isPaused && prevState.startTime) {
          // 実行中の場合、startTimeを調整
          const now = Date.now();
          const newStartTime = now - clampedSeconds * 1000 - prevState.pausedTime;

          newState = {
            ...prevState,
            elapsedTime: clampedSeconds,
            startTime: newStartTime,
          };
        } else {
          // 停止中の場合、そのまま設定
          newState = {
            ...prevState,
            elapsedTime: clampedSeconds,
          };
        }

        saveToStorage(newState);
        return newState;
      });
    },
    [saveToStorage]
  );

  // 総時間設定
  const setTotalDuration = useCallback(
    (seconds: number) => {
      setState((prevState) => {
        const newState: TimerState = {
          ...prevState,
          totalDuration: seconds,
          // 現在の経過時間が新しい総時間を超える場合は調整
          elapsedTime: Math.min(prevState.elapsedTime, seconds),
        };

        saveToStorage(newState);
        return newState;
      });
    },
    [saveToStorage]
  );

  // 初期化時にLocalStorageから復元
  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  // インターバル設定
  useEffect(() => {
    if (state.isRunning && !state.isPaused) {
      intervalRef.current = setInterval(updateTimer, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state.isRunning, state.isPaused, updateTimer]);

  return {
    state,
    start,
    pause,
    resume,
    reset,
    setTime,
    setTotalDuration,
  };
};
