export default class Utils {
	public static readonly LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
	public static readonly UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	public static readonly NUMBERS = "0123456789";
	public static readonly LOWERCASE_UPPERCASE = Utils.LOWERCASE_LETTERS + Utils.UPPERCASE_LETTERS;
	public static readonly ALPHANUMERIC = Utils.LOWERCASE_UPPERCASE + Utils.NUMBERS;
	private static readonly NONCE_CHARS = Utils.ALPHANUMERIC;
	
	public static generateNonce() {
		return this.generateString(this.ALPHANUMERIC, 20);
	}
	
	public static generateString(chars: string, length: number) {
		let str = "";
		for (let i = 0; i < length; i++) {
			str += this.pickRandomElement(chars);
		}
		return str;
	}
	
	public static generateRandomInt(to: number): number;
	public static generateRandomInt(from: number, to: number): number;
	public static generateRandomInt(from: number, to?: number): number {
		if (to === undefined) {
			// Single argument only
			to = from;
			from = 0;
		}
		to = Math.floor(to);
		from = Math.ceil(from);
		return from + Math.floor(Math.random() * (to - from));
	}
	
	public static pickRandomElement(string: string): string;
	public static pickRandomElement<T>(array: T[]): T;
	public static pickRandomElement<T>(thing: any): T {
		let keys = Object.keys(thing) as (keyof typeof thing)[];
		return thing[keys[this.generateRandomInt(keys.length)]];
	}
}