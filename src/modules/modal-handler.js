export const modalInfo = {
  header: null,
  body: null,
  footer: null,
  state: null,
  hideButton: false
}

export const setModal = (state = 0) => {
  function setModalInfo (par) {
    const keys = Object.keys(modalInfo)
    for (const key of keys) {
      if (Object.prototype.hasOwnProperty.call(par, key)) { modalInfo[key] = par[key] } else modalInfo[key] = null
    }
  }
  switch (state) {
    case 0:
      setModalInfo({
        header: null,
        body: null,
        footer: null,
        hideButton: false,
        state: state
      })
  }
}
