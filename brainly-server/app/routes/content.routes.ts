import express from 'express';
import { jwtAuth } from '../jwt/jwtAuth';
import { ContentDelete, ContentDeleteId, contentGet, ContentGetId, contentPost, ContentPutId } from '../controller/content.controller';

const router = express.Router();

router.get('', jwtAuth, contentGet);
router.post('', jwtAuth, contentPost);
router.delete('', jwtAuth, ContentDelete);
router.get('/:id', jwtAuth, ContentGetId);
router.put('/:id', jwtAuth, ContentPutId);
router.delete('/:id', jwtAuth, ContentDeleteId);

export default router;