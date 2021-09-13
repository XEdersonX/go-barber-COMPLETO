import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

// Midlewares
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthentication';
import AppointmentsContoller from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

// Importamos a entidade Appointment para criar-la posteriormente

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

const appointmentsController = new AppointmentsContoller();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date().required(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
