export const DialogManager = {
    state: {
        archiveDialogVisibility: false,
        confirmDialogVisibility: false,
        archiveDialogText: '',
        confirmDialogText: ''
    },
    mutations: {
        TOGGLE_ARCHIVE_DIALOG(state: any, text: string): void {
            state.archiveDialogText = text;
            state.archiveDialogVisibility = !state.archiveDialogVisibility;
        },
        TOGGLE_CONFIRM_DIALOG(state: any, text: string): void {
            state.confirmDialogText = text;
            state.confirmDialogVisibility = true;
            setTimeout((): boolean => state.confirmDialogVisibility = false, 2000);
        }
    }
}