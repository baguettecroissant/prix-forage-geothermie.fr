"use client";

import { useEffect, useRef } from "react";

export function ViteUnDevisWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current && containerRef.current.querySelector("script")) {
            return;
        }

        const w = window as any;
        w.vud_partenaire_id = '2353';
        w.vud_keyword = encodeURI('Devis Géothermie');
        w.vud_box_id = '257152b6d2';

        const vud_js = document.createElement('script');
        vud_js.type = 'text/javascript';
        vud_js.async = true;
        vud_js.src = '//www.viteundevis.com/marqueblanche/?b=' + w.vud_box_id + '&p=' + w.vud_partenaire_id + '&c=' + w.vud_keyword;

        if (containerRef.current) {
            containerRef.current.appendChild(vud_js);
        }
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200" id="simulateur-devis">
            <div id="v257152b6d2d" className="min-h-[400px] flex items-center justify-center text-stone-400">
                <span ref={containerRef}>
                </span>
            </div>
            <p className="text-center text-xs text-stone-400 mt-2">
                Service gratuit et sans engagement — Étude de sol offerte
            </p>
        </div>
    );
}
