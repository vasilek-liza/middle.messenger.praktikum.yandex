export function getErrorText(message: string) {
    let error = document.getElementById("error");
    error!.style.display = "block";
    error!.style.position = "absolute";

    error!.innerText = message;
}