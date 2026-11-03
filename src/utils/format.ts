export function formatPrice(n: number): string {
  return '$' + n.toLocaleString('es-AR');
}

import type { PaymentMethod } from '@/types';

export function buildWhatsAppMessage(parts: {
  orderItems: { name: string; optionLabel: string; quantity: number; price: number }[];
  subtotal: number;
  total: number;
  surcharge: number;
  paymentMethod: PaymentMethod;
  customerName: string;
  deliveryMode: 'retiro' | 'envio';
  address?: string;
  reference?: string;
  observations?: string;
}): string {
  const {
    orderItems,
    subtotal,
    total,
    surcharge,
    paymentMethod,
    customerName,
    deliveryMode,
    address,
    reference,
    observations,
  } = parts;
  const paymentLabels: Record<PaymentMethod, string> = {
    efectivo: 'Efectivo',
    transferencia: 'Transferencia (+5%)',
    mercadopago: 'Mercado Pago (+5%)',
  };

  const lines: string[] = [];
  lines.push('*NUEVO PEDIDO — LA COCINA DE TULU*');
  lines.push('');
  lines.push(`*Cliente:* ${customerName}`);
  lines.push(`*Modalidad:* ${deliveryMode === 'retiro' ? 'Retiro por el local' : 'Envío a domicilio'}`);
  if (deliveryMode === 'envio' && address) lines.push(`*Dirección:* ${address}`);
  if (reference) lines.push(`*Referencias:* ${reference}`);
  lines.push('');
  lines.push('*Pedido:*');
  orderItems.forEach((item) => {
    lines.push(
      `• ${item.quantity}x ${item.name} (${item.optionLabel}) — ${formatPrice(item.price * item.quantity)}`,
    );
  });
  lines.push('');
  lines.push(`*Medio de pago:* ${paymentLabels[paymentMethod]}`);
  lines.push(`*Subtotal:* ${formatPrice(subtotal)}`);
  if (surcharge > 0) lines.push(`*Recargo 5%:* ${formatPrice(surcharge)}`);
  lines.push(`*TOTAL: ${formatPrice(total)}*`);
  if (observations) {
    lines.push('');
    lines.push(`*Observaciones:* ${observations}`);
  }
  return lines.join('\n');
}
