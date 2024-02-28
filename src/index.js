/**
 * Enhanced EasyModal class with support for remembering user actions through cookies,
 * customizable cookie duration, and automatic timed modal display.
 */
class EasyModal {
  constructor() {
    // Initialize modals once the DOM is fully loaded.
    document.addEventListener('DOMContentLoaded', () => {
      this.initModals();
      this.initTimedModals();
    });
  }

  /**
   * Initializes modals with triggers and binds actions for close, accept, and cancel.
   */
  initModals() {
    document.querySelectorAll('[data-modal-trigger]').forEach((trigger) => {
      const modalId = trigger.getAttribute('data-modal-trigger');
      const modal = document.getElementById(modalId);
      // Check if an action has already been taken for this modal
      const actionTaken = this.getCookie(`modalAction_${modalId}`);
      if (!actionTaken) {
        // Only set up the modal if no action has been recorded
        trigger.addEventListener('click', () => modal.showModal());
        this.bindButtonActions(modal, modalId);
      }
    });
  }

  /**
   * Binds click events to buttons within the modal for close, accept, and cancel actions.
   * Sets a cookie based on the user's action.
   */
  bindButtonActions(modal, modalId) {
    modal
      .querySelectorAll(
        '[data-modal-close], [data-modal-accept], [data-modal-cancel]'
      )
      .forEach((button) => {
        button.addEventListener('click', () => {
          const actionType = button.dataset.modalClose
            ? 'close'
            : button.dataset.modalAccept
            ? 'accept'
            : 'cancel';
          const cookieDuration =
            modal.getAttribute('data-modal-cookie-expire') || 7; // Default to 7 days
          // Set a cookie to remember the user's action
          this.setCookie(
            `modalAction_${modalId}`,
            actionType,
            parseInt(cookieDuration)
          );
          modal.close(); // Close the modal after recording the action
        });
      });
  }

  /**
   * Initializes modals that should appear after a specified delay (timed modals).
   */
  initTimedModals() {
    document.querySelectorAll('dialog[data-modal-timed]').forEach((modal) => {
      const delay = modal.getAttribute('data-modal-timed');
      const modalId = modal.id;
      const actionTaken = this.getCookie(`modalAction_${modalId}`);
      if (!actionTaken) {
        setTimeout(() => {
          modal.showModal();
          this.bindButtonActions(modal, modalId);
        }, delay * 1000); // Convert seconds to milliseconds
      }
    });
  }

  /**
   * Sets a cookie.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {number} days - Expiration of the cookie in days.
   */
  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  /**
   * Retrieves a cookie by name.
   * @param {string} name - The name of the cookie to retrieve.
   * @return {string|null} The value of the cookie if found, otherwise null.
   */
  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
}
