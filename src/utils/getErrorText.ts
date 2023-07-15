export function getErrorText(message: string) {
    const error = document.getElementById("error");
    error!.style.display = "block";
    error!.style.position = "absolute";

    error!.innerText = message;
}
