let telegramId
const configApp = () => {
  function getTelegram() {
    const tg = window.Telegram.WebApp
    telegramId = tg.initDataUnsafe.user ? tg.initDataUnsafe.user.id : null
  }
  function setupBackButton(isVisible) {
    const eventData = { is_visible: isVisible }
    window.TelegramWebviewProxy.postEvent('web_app_setup_back_button', eventData)
  }
  function toggleBackButton() {
    this.isBackButtonVisible = !this.isBackButtonVisible
    this.setupBackButton(this.isBackButtonVisible)
  }

  return { getTelegram, setupBackButton, toggleBackButton, telegramId }
}
export default configApp
