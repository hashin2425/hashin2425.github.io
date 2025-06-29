export interface TimerState {
  isRunning: boolean;
  isPaused: boolean;
  elapsedTime: number; // 秒
  startTime: number | null; // タイムスタンプ (ms)
  pausedTime: number; // 一時停止の累計時間 (ms)
  totalDuration: number; // 総所要時間 (秒)
}

export interface TimelineSegment {
  name: string;
  startTime: number; // 秒
  endTime: number; // 秒
  color: string; // Tailwind CSS クラス
  bgColor: string; // Tailwind CSS クラス
  percentage: number; // 全体に対する割合 (0-1)
}

export interface UseTimerReturn {
  state: TimerState;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  setTime: (seconds: number) => void;
  setTotalDuration: (seconds: number) => void;
}

export const DEFAULT_TOTAL_DURATION = 30 * 60; // 30分 (秒)

// セグメントの割合定義（合計は1.0になるようにする）
export const SEGMENT_PERCENTAGES = [
  {
    name: "仕様理解",
    percentage: 5 / 30,
    color: "text-blue-700",
    bgColor: "bg-blue-200",
  },
  {
    name: "基本実装",
    percentage: 20 / 30,
    color: "text-green-700",
    bgColor: "bg-green-200",
  },
  {
    name: "テスト確認",
    percentage: 2 / 30,
    color: "text-yellow-700",
    bgColor: "bg-yellow-200",
  },
  {
    name: "余裕時間",
    percentage: 3 / 30,
    color: "text-gray-700",
    bgColor: "bg-gray-200",
  },
];

// 総時間に基づいてタイムラインセグメントを生成
export const generateTimelineSegments = (totalDuration: number): TimelineSegment[] => {
  let currentTime = 0;

  return SEGMENT_PERCENTAGES.map((segment) => {
    const duration = Math.round(totalDuration * segment.percentage);
    const timelineSegment: TimelineSegment = {
      name: segment.name,
      startTime: currentTime,
      endTime: currentTime + duration,
      color: segment.color,
      bgColor: segment.bgColor,
      percentage: segment.percentage,
    };
    currentTime += duration;
    return timelineSegment;
  });
};
