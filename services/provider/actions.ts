export function updatePageHistory(page: string) {
  return {
    type: 'UPDATE_PAGE_HISTORY',
    payload: { page },
  };
}

export type GlobalStateAction = ReturnType<typeof updatePageHistory>;
