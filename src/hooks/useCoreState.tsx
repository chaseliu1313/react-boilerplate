import { useContext } from 'react';
import { CoreActions, CoreState } from '../context';
import { CoreContext } from '../context/coreContext';

export default function useCoreState(): {
  coreState: CoreState;
  updateCoreState: React.Dispatch<CoreActions>;
} {
  const { coreState, updateCoreState } = useContext(CoreContext);
  return { coreState, updateCoreState };
}
