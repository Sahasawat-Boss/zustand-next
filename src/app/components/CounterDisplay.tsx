'use client';

import useCounterStore from "../store/counter";

export default function CounterDisplay() {
    const count = useCounterStore((state) => state.count);

    return (
        <div className="text-lg font-semibold">
            Current Count: {count}
        </div>
    );
}
