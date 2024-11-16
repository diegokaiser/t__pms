export default function encryptKey(passkey: string) {
	return btoa(passkey)
}
