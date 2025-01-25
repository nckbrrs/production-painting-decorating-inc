"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<"dialog">>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	return createPortal(
		<dialog
			ref={dialogRef}
			className="absolute h-screen w-screen bg-black/80"
			onClose={onDismiss}
		>
			{children}
			<button onClick={onDismiss} className="absolute top-4 right-12 bg-red-400 px-4 py-2 rounded-xl">
				x
			</button>
		</dialog>,
		document.getElementById("modal-root")!,
	);
}