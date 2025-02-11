

export function CallPhone(no:string){
	window.open(no,"_system")
}

export function CallNumber(phoneNumber:string) {
    const telLink = `tel:${phoneNumber}`;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        window.open(telLink, '_system');
    } else {
        alert('Perangkat Anda tidak mendukung panggilan telepon.');
    }
}