import { TTaskFormState } from '@/types/task.types';
import debounce from 'lodash.debounce';

import { useCallback, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';

import { useCreateTask } from './useCreateTask';
import { useUpdateTask } from './useUpdateTask';

interface IUseTaskDebounce {
  watch: UseFormWatch<TTaskFormState>;
  itemId: string;
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
  const { createTask } = useCreateTask();
  const { updateTask } = useUpdateTask();

  const debouncedCreateTask = useCallback(
    debounce((formData: TTaskFormState) => {
      createTask(formData);
    }, 444),
    [],
  );

  const debouncedUpdateTask = useCallback(
    debounce((formData: TTaskFormState) => {
      updateTask({ id: itemId, data: formData });
    }, 444),
    [],
  );

  useEffect(() => {
    const { unsubscribe } = watch((formData) => {
      if (itemId) {
        debouncedUpdateTask({
          ...formData,
          priority: formData.priority || undefined,
        });
      } else {
        debouncedCreateTask(formData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [watch(), debouncedUpdateTask, debouncedCreateTask]);
}
