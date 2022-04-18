import axios from 'axios';
import { ParameterizedContext } from 'koa';
import { yapilyToken } from '../helpers';

const getInstance = () =>
  axios.create({
    baseURL: 'https://api.yapily.com/',
    headers: {
      Authorization: `Basic ${yapilyToken()}`,
    },
  });

export const getInstitution = async (ctx: ParameterizedContext) => {
  const { data } = await getInstance().get('/institutions');
  ctx.body = data.data;
};

export const initPayment = async (ctx: ParameterizedContext) => {
  const { service, IBAN, payerName } = ctx.request.body;
  const params = {
    applicationUserId: 'single-payment-tutorial',
    institutionId: service,
    callback: 'https://display-parameters.com/',
    paymentRequest: {
      paymentIdempotencyId: '234g87t58tgeuo848wudjew489',
      payer: {
        name: payerName || 'John Doe',
        accountIdentifications: [
          {
            type: 'IBAN',
            identification: IBAN || 'IT77O0848283352871412938123',
          },
        ],
      },
      amount: {
        amount: 3,
        currency: 'GBP',
      },
      reference: 'Bill Payment',
      type: 'DOMESTIC_PAYMENT',
      payee: {
        name: 'Jane Doe',
        address: {
          country: 'BE',
        },
        accountIdentifications: [
          {
            type: 'IBAN',
            identification: 'BE12345678901234',
          },
        ],
      },
    },
  };
  const { data } = await getInstance().post('/payment-auth-requests', params);

  ctx.body = data.data;
};

export const finalizePayment = async (ctx: ParameterizedContext) => {
  const { consentToken } = ctx.request.body;
  const params = {
    paymentIdempotencyId: '234g87t58tgeuo848wudjew489',
    amount: {
      amount: 3,
      currency: 'GBP',
    },
    reference: 'Bill Payment',
    type: 'DOMESTIC_PAYMENT',
    payee: {
      name: 'Jane Doe',
      address: {
        country: 'BE',
      },
      accountIdentifications: [
        {
          type: 'IBAN',
          identification: 'BE12345678901234',
        },
      ],
    },
  };
  const configHeader = {
    headers: {
      Consent: consentToken,
    },
  };
  const { data } = await getInstance().post('/payments', params, configHeader);

  ctx.body = data.data;
};
