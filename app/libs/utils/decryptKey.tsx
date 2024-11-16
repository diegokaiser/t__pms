export default function decryptKey(passkey: string) {
	return atob(passkey)
}
