import { useState } from "react";

export function CallbackModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch(
        "https://n88n.ctrl-crew.eu/webhook-test/cheveux-libres/nouveau-prospect/fee082ad-bc60-47ca-8287-a52af12f4d86",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
          }),
        },
      );

      setSubmitStatus("success");
      setFormData({ name: "", phone: "" });
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[var(--radius-large)] p-8 max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2
            className="heading-5 text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Être rappelé
          </h2>
          <button
            onClick={onClose}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-[var(--text-regular)] font-medium text-[var(--color-text-primary)] mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Prénom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-[var(--radius-button)] focus:outline-none focus:ring-2 focus:ring-[var(--color-stonewall)] focus:border-transparent"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-regular)",
              }}
              placeholder="Votre prénom"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-[var(--text-regular)] font-medium text-[var(--color-text-primary)] mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-[var(--radius-button)] focus:outline-none focus:ring-2 focus:ring-[var(--color-stonewall)] focus:border-transparent"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-regular)",
              }}
              placeholder="06XXXXXXXX"
            />
          </div>

          {submitStatus === "success" && (
            <p
              className="text-green-600 text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Votre demande a été envoyée avec succès ! Nous vous rappellerons dans les plus brefs délais.
            </p>
          )}

          {submitStatus === "error" && (
            <p
              className="text-red-600 text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
              disabled={isSubmitting}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
