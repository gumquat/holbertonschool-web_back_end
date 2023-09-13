export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push('Error: '.concat(error.message));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
