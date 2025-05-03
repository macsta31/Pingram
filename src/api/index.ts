
import { Router } from 'express'
import bullboard from './admin/bullboard'

import reminders from './reminders'
import templates from './templates'
import sequenceTemplates from './sequenceTemplates'
import sequenceSteps from './sequenceSteps'
import sequences from './sequences'
import accounts from './accounts'
import customers from './customers'
import cancelEvents from './cancelEvents'

const router = Router()

router.use('/reminders', reminders)
router.use('/templates', templates)
router.use('/sequence-templates', sequenceTemplates)
router.use('/sequence-steps', sequenceSteps)
router.use('/sequences', sequences)
router.use('/accounts', accounts)
router.use('/customers', customers)


router.use('/admin', bullboard)

export default router
