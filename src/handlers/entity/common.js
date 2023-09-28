export default (type, value, entity) => {
  switch (type) {
    case 5: {
      return {
        handle: value,
      }
    }
    case 6:
      // Linetype name (present if not BYLAYER).
      // The special name BYBLOCK indicates a
      // floating linetype. (optional)
      return {
        lineTypeName: value,
      }
    case 8:
      return {
        layer: value,
      }
    case 48:
      // Linetype scale (optional)
      return {
        lineTypeScale: value,
      }
    case 60:
      // Object visibility (optional): 0 = visible, 1 = invisible.
      return {
        visible: value === 0,
      }
    case 62:
      // Color number (present if not BYLAYER).
      // Zero indicates the BYBLOCK (floating) color.
      // 256 indicates BYLAYER.
      // A negative value indicates that the layer is turned off. (optional)
      return {
        colorNumber: value,
      }
    case 67:
      // Paper space or sheet.
      // Absent or zero indicates entity is in model space. 1 indicates entity is in paper space (optional)
      return value === 0
        ? {}
        : {
            paperSpace: value,
          }
    case 68:
      // Identifies whether viewport is on but fully off screen, is not active, or is off
      return {
        viewportOn: value,
      }
    case 69:
      // Viewport identification number
      return {
        viewport: value,
      }
    case 210:
      return {
        extrusionX: value,
      }
    case 220:
      return {
        extrusionY: value,
      }
    case 230:
      return {
        extrusionZ: value,
      }
    case 410:
      return {
        layout: value,
      }
    case 1000: {
      if(entity) {
        entity.extendedData = entity.extendedData || {};
        entity.extendedData.value = value;
        entity.extendedData.customStrings = entity.extendedData.customStrings || [];
        entity.extendedData.customStrings.push(value);
      }
      return {}
    }
    case 1001: {
      if(entity) {
        entity.extendedData = entity.extendedData || {};
        entity.extendedData.applicationName = value;
      }
      return {}
    }
    default:
      return {}
  }
}
