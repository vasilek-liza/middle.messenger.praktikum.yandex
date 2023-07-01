export function getFormData(formId: string) {
    const formData = new FormData(document.getElementById(formId) as HTMLFormElement);
    const currentData: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
        currentData[key] = value;
    }

    return currentData;
}