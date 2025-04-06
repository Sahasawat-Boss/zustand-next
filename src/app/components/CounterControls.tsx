'use client';

import useCounterStore from "../store/counter";

export default function CounterControls() {
    const increase = useCounterStore((state) => state.increase);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div className="space-x-2 mt-4">
            <button onClick={increase} className="bg-blue-500 text-white px-4 py-2 rounded">
                Increase
            </button>
            <button onClick={reset} className="bg-gray-500 text-white px-4 py-2 rounded">
                Reset
            </button>
        </div>
    );
}
