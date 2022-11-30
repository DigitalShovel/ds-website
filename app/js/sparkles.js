var tl1 = gsap.timeline({ repeat: -1, ease: "none" });
var tl2 = gsap.timeline({ repeat: -1, ease: "none" });

tl1.to(".sparkle-1", { rotation: "180deg", transformOrigin: "center center", scale: 1.5 });
tl1.to(".sparkle-1", { rotation: "360deg", transformOrigin: "center center", scale: 0 });

tl1.to(".sparkle-4", { rotation: "180deg", transformOrigin: "center center", scale: 1.5 });
tl1.to(".sparkle-4", { rotation: "360deg", transformOrigin: "center center", scale: 0 });

tl1.to(".sparkle-3", { rotation: "180deg", transformOrigin: "center center", scale: 1.5 });
tl1.to(".sparkle-3", { rotation: "360deg", transformOrigin: "center center", scale: 0 });

tl1.to(".sparkle-2", { rotation: "180deg", transformOrigin: "center center", scale: 1.5 });
tl1.to(".sparkle-2", { rotation: "360deg", transformOrigin: "center center", scale: 0 });
