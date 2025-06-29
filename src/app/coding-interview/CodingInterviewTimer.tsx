import React, { useState, useMemo } from 'react';
import { useTimer } from './useTimer';
import { generateTimelineSegments, TimelineSegment } from './timer';

// 共通ボタンコンポーネント
interface ButtonProps {
    onClick: () => void;
    color: 'green' | 'blue' | 'orange' | 'red' | 'gray';
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, children, className = '' }) => {
    const colorClasses = {
        green: 'bg-green-500 hover:bg-green-600',
        blue: 'bg-blue-500 hover:bg-blue-600',
        orange: 'bg-orange-500 hover:bg-orange-600',
        red: 'bg-red-500 hover:bg-red-600',
        gray: 'bg-gray-500 hover:bg-gray-600',
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 ${colorClasses[color]} text-white font-semibold rounded-lg transition-colors ${className}`}
        >
            {children}
        </button>
    );
};

// 時間入力コンポーネント
interface TimeInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    max: number;
}

const TimeInput: React.FC<TimeInputProps> = ({ label, value, onChange, max }) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="number"
                placeholder={label}
                min="0"
                max={max}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-16 px-2 py-1 border rounded text-center"
            />
            <span>{label}</span>
        </div>
    );
};

// ステータス表示コンポーネント
interface StatusItemProps {
    label: string;
    value: string;
    color?: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ label, value, color = 'text-gray-700' }) => {
    return (
        <div>
            <div className="text-sm font-semibold text-gray-700">{label}</div>
            <div className={`text-sm ${color}`}>{value}</div>
        </div>
    );
};

// タイムラインセグメントコンポーネント
interface TimelineSegmentItemProps {
    segment: TimelineSegment;
    isActive: boolean;
    isPassed: boolean;
    elapsedTime: number;
    formatTime: (seconds: number) => string;
}

const TimelineSegmentItem: React.FC<TimelineSegmentItemProps> = ({
    segment,
    isActive,
    isPassed,
    elapsedTime,
    formatTime
}) => {
    const segmentProgress = Math.min(
        Math.max(
            ((elapsedTime - segment.startTime) / (segment.endTime - segment.startTime)) * 100,
            0
        ),
        100
    );

    return (
        <div
            className={`p-3 rounded-lg border-2 transition-all min-h-16 ${isActive
                ? `${segment.bgColor} border-current ${segment.color} shadow-lg scale-100`
                : isPassed
                    ? 'bg-gray-100 border-gray-300 text-gray-500 scale-95'
                    : 'bg-white border-gray-200 text-gray-700 scale-95'
                }`}
        >
            <div className="flex justify-between items-center">
                <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base mb-1 truncate">{segment.name}</div>
                    <div className="text-sm flex gap-4">
                        <span className="truncate">{formatTime(segment.startTime)} - {formatTime(segment.endTime)}</span>
                        <span className="flex-shrink-0">({Math.round((segment.endTime - segment.startTime) / 60)}分)</span>
                    </div>
                </div>

                {/* セグメント内進捗 */}
                <div className="w-32 ml-4 flex-shrink-0">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all duration-500 ${isActive ? 'bg-current' : isPassed ? 'bg-gray-400' : 'bg-gray-300'
                                }`}
                            style={{
                                width: `${elapsedTime >= segment.startTime && elapsedTime <= segment.endTime
                                    ? segmentProgress
                                    : isPassed
                                        ? 100
                                        : 0
                                    }%`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};



const CodingInterviewTimer: React.FC = () => {
    const { state, start, pause, resume, reset, setTime, setTotalDuration } = useTimer();
    const [showTimeInput, setShowTimeInput] = useState(false);
    const [inputMinutes, setInputMinutes] = useState('');
    const [inputSeconds, setInputSeconds] = useState('');

    // 動的にタイムラインセグメントを生成
    const timelineSegments = useMemo(() => {
        return generateTimelineSegments(state.totalDuration);
    }, [state.totalDuration]);

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getRemainingTime = (): string => {
        const remaining = state.totalDuration - state.elapsedTime;
        return formatTime(Math.max(0, remaining));
    };

    const getCurrentSegment = (): TimelineSegment | null => {
        return timelineSegments.find(
            segment => state.elapsedTime >= segment.startTime && state.elapsedTime < segment.endTime
        ) || null;
    };

    const getProgressPercentage = (): number => {
        return Math.min((state.elapsedTime / state.totalDuration) * 100, 100);
    };

    const handleTimeAdjust = () => {
        const minutes = parseInt(inputMinutes) || 0;
        const seconds = parseInt(inputSeconds) || 0;
        const totalSeconds = minutes * 60 + seconds;

        if (totalSeconds >= 5 * 60 && totalSeconds <= 120 * 60) { // 5分〜120分の範囲
            setTotalDuration(totalSeconds);
            setShowTimeInput(false);
            setInputMinutes('');
            setInputSeconds('');
        }
    };

    const currentSegment = getCurrentSegment();
    const progressPercentage = getProgressPercentage();
    const isTimeUp = state.elapsedTime >= state.totalDuration;

    return (
        <div className="bg-gray-50 p-4 overflow-hidden">
            <div className="max-w-4xl mx-auto flex flex-col">
                {/* ヘッダー */}
                <div className="bg-white rounded-lg shadow-lg p-4 mb-4 min-h-36">
                    {/* 現在の時間表示 */}
                    <div className="text-center mb-3">
                        <div className="text-4xl font-mono font-bold text-gray-800 mb-2">
                            {formatTime(state.elapsedTime)}
                        </div>
                        <div className="text-lg text-gray-600 flex justify-center items-center gap-4">
                            <span>残り時間: {getRemainingTime()}</span>
                            {currentSegment && (
                                <span className={`font-semibold ${currentSegment.color}`}>
                                    {currentSegment.name}
                                </span>
                            )}
                        </div>
                        {isTimeUp && (
                            <div className="text-xl font-bold text-red-600 mt-1 animate-pulse">
                                時間終了！
                            </div>
                        )}
                    </div>

                    {/* コントロールボタン */}
                    <div className="flex justify-center gap-3 mb-2">
                        {!state.isRunning ? (
                            <Button onClick={start} color="green">
                                開始
                            </Button>
                        ) : state.isPaused ? (
                            <Button onClick={resume} color="blue">
                                再開
                            </Button>
                        ) : (
                            <Button onClick={pause} color="orange">
                                一時停止
                            </Button>
                        )}

                        <Button onClick={reset} color="red">
                            リセット
                        </Button>

                        <Button onClick={() => setShowTimeInput(!showTimeInput)} color="gray">
                            全体時間設定
                        </Button>
                    </div>

                    {/* 時間調整入力 */}
                    {showTimeInput && (
                        <div className="bg-gray-100 rounded-lg p-3 mt-2">
                            <div className="text-center mb-3">
                                <div className="text-sm font-semibold text-gray-700 mb-2">
                                    コーディングテスト全体の所要時間を設定
                                </div>
                                <div className="text-xs text-gray-500">
                                    現在の設定: {formatTime(state.totalDuration)} (各セグメントの時間は自動計算されます)
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4 flex-wrap">
                                <TimeInput
                                    label="分"
                                    value={inputMinutes}
                                    onChange={setInputMinutes}
                                    max={120}
                                />
                                <TimeInput
                                    label="秒"
                                    value={inputSeconds}
                                    onChange={setInputSeconds}
                                    max={59}
                                />
                                <Button onClick={handleTimeAdjust} color="blue" className="rounded">
                                    設定
                                </Button>
                                <Button onClick={() => setShowTimeInput(false)} color="gray" className="rounded">
                                    キャンセル
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* タイムライン */}
                <div className="bg-white rounded-lg shadow-lg p-4 flex-1 min-h-0 overflow-hidden">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        進捗タイムライン
                    </h2>

                    {/* 進捗バー */}
                    <div className="relative mb-4">
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-1000 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                        <div className="text-center mt-1 text-sm text-gray-600">
                            進捗: {Math.round(progressPercentage)}%
                        </div>
                    </div>

                    {/* セグメント一覧 */}
                    <div className="grid grid-cols-1 gap-2 overflow-y-auto">
                        {timelineSegments.map((segment, index) => {
                            const isActive = currentSegment?.name === segment.name;
                            const isPassed = state.elapsedTime > segment.endTime;

                            return (
                                <TimelineSegmentItem
                                    key={index}
                                    segment={segment}
                                    elapsedTime={state.elapsedTime}
                                    isActive={isActive}
                                    isPassed={isPassed}
                                    formatTime={formatTime}
                                />
                            );
                        })}
                    </div>

                    {/* ステータス情報 */}
                    <div className="mt-4 bg-gray-50 rounded-lg p-3 min-h-16">
                        <div className="grid grid-cols-3 gap-4 text-center h-full items-center">
                            <StatusItem
                                label="状態"
                                value={state.isRunning
                                    ? state.isPaused
                                        ? '一時停止中'
                                        : '実行中'
                                    : '停止中'}
                                color={state.isRunning
                                    ? state.isPaused
                                        ? 'text-orange-600'
                                        : 'text-green-600'
                                    : 'text-gray-600'}
                            />
                            <StatusItem
                                label="経過時間"
                                value={formatTime(state.elapsedTime)}
                                color="text-blue-600 font-mono"
                            />
                            <StatusItem
                                label="残り時間"
                                value={getRemainingTime()}
                                color={`font-mono ${state.totalDuration - state.elapsedTime <= 5 * 60 ? 'text-red-600' : 'text-green-600'}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodingInterviewTimer;
