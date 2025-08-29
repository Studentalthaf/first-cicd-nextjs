// Fungsi utilitas contoh
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Fungsi untuk menggabungkan className (mirip clsx)
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Fungsi utilitas lain bisa ditambahkan di sini
