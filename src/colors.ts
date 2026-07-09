function letterToNumber(letter: string): number {
    return letter.toUpperCase().charCodeAt(0) - 65;
}

export function nameToColor(name: string): string {
    if (name.length === 0) return "#000000";
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < name.length; i++) {
        const charCode = name.charCodeAt(i);
        r += letterToNumber(String.fromCharCode(charCode));
        g += letterToNumber(String.fromCharCode(charCode + 1));
        b += letterToNumber(String.fromCharCode(charCode + 2));
    }
    const rStr = (r % 256).toString(16).padStart(2, '0');
    const gStr = (g % 256).toString(16).padStart(2, '0');
    const bStr = (b % 256).toString(16).padStart(2, '0');
    return `#${rStr}${gStr}${bStr}`;
}

export function numberToColor(num: number): string {
    const hue = 240 - (num * 240 / 25);
    const saturation = 100; // Maximum saturation
    const lightness = 50;   // Maximum vibrancy
    return hslToHex(hue, saturation, lightness);
}

function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number): string => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
