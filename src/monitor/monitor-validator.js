import {body} from 'express-validator'

export const createMonitorValidator = [
  body('name', 'Invalid does not Empty').not().isEmpty(),
  body('responsible', 'Invalid email').isEmail(),
]
