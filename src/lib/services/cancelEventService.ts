import { addCancelJob } from "../queue/producers/cancelEventProducer";

export interface CancelEventService {
	cancel: (cancel_event: string, customerId: string, sequenceId: string) => Promise<void>
}


export const makeCancelService = () => {
	return {
		cancel: (cancel_event: string, customerId: string, sequenceId: string) => {
			return addCancelJob({ type: cancel_event, customerId }, `cancel-${customerId}-${sequenceId}`)
		}
	}
}
