export const defaultMessage = "Olá! Vim pelo site da Santos Corrêa e gostaria de conhecer melhor os serviços.";
export function whatsapp(message = defaultMessage, number = "5548998429674") {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
