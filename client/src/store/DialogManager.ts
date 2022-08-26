export const DialogManager = {
    state: {
        archiveDialogVisibility: false,
        confirmDialogVisibility: false,
        confirmDialogText: ''
    },
    mutations: {
        TOGGLE_ARCHIVE_DIALOG(state: any): void {
            state.archiveDialogVisibility = !state.archiveDialogVisibility;
        },
        TOGGLE_CONFIRM_DIALOG(state: any, text: string): void {
            state.confirmDialogText = text;
            state.confirmDialogVisibility = !state.confirmDialogVisibility;
        }
    }
}