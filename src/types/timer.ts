export interface TimerState {
  isRunning: boolean;
  isPaused: boolean;
  elapsedTime: number; // 秒
  startTime: number | null; // タイムスタンプ (ms)
  pausedTime: number; // 一時停止の累計時間 (ms)
}

export interface TimelineSegment {
  name: string;
  startTime: number; // 秒
  endTime: number; // 秒
  color: string; // Tailwind CSS クラス
  bgColor: string; // Tailwind CSS クラス
}

export interface UseTimerReturn {
  state: TimerState;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  setTime: (seconds: number) => void;
}

export const TOTAL_DURATION = 30 * 60; // 30分 (秒)

export const TIMELINE_SEGMENTS: TimelineSegment[] = [
  {
    name: "仕様理解",
    startTime: 0,
    endTime: 5 * 60,
    color: "text-blue-700",
    bgColor: "bg-blue-200",
  },
  {
    name: "基本実装",
    startTime: 5 * 60,
    endTime: 20 * 60,
    color: "text-green-700",
    bgColor: "bg-green-200",
  },
  {
    name: "テスト確認",
    startTime: 20 * 60,
    endTime: 27 * 60,
    color: "text-yellow-700",
    bgColor: "bg-yellow-200",
  },
  {
    name: "余裕時間",
    startTime: 27 * 60,
    endTime: 30 * 60,
    color: "text-gray-700",
    bgColor: "bg-gray-200",
  },
];
