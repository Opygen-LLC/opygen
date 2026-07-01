"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { cn } from "@/lib/utils";

interface BookCallButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function BookCallButton({ className, children, onClick }: BookCallButtonProps) {
    useEffect(() => {
        (async function () {
            try {
                const cal = await getCalApi({ "namespace": "30min" });
                cal("ui", { 
                    "cssVarsPerTheme": { 
                        "light": { "cal-brand": "#000000" }, 
                        "dark": { "cal-brand": "#000000" } 
                    }, 
                    "hideEventTypeDetails": false, 
                    "layout": "month_view" 
                });
            } catch (error) {
                console.error("Failed to initialize Cal API:", error);
            }
        })();
    }, []);

    return (
        <button
            onClick={onClick}
            data-cal-namespace="30min"
            data-cal-link="opygen/30min"
            data-cal-config='{"layout":"month_view","useSmallScreenLayout":true,"theme":"auto"}'
            className={cn(
                "flex items-center justify-center rounded-full bg-black text-white font-semibold transition hover:bg-zinc-800 active:scale-95 cursor-pointer",
                className
            )}
        >
            {children || "Book a Call"}
        </button>
    );
}
