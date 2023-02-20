import { generateCreatedAttribute, generateModifiedAttribute } from '../utils/userstamp.util';
import {v4 as uuidv4} from 'uuid';

export const loggerGenerator = (req, status, message, txId) => ({
  id: uuidv4(),
  txId,
  url: req.originalUrl,
  status,
  body: req.body,
  message,
  ...generateCreatedAttribute(req),
  ...generateModifiedAttribute(req)
});