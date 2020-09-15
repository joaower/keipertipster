class Utility {
  getSportValue(sportValue) {
    switch (sportValue) {
      case '1':
        return 'Tenis';
      case '2':
        return 'Basketball';
      case '3':
        return 'Soccer';
      default:
        return 'default';
    }
  }

  getTypeValue(typeValue) {
    switch (typeValue) {
      case '1':
        return 'Simples';
      case '2':
        return 'Combinada';
      default:
        return 'default';
    }
  }

  getRiskValue(riskValue) {
    switch (riskValue) {
      case '1':
        return 'Valor';
      case '2':
        return 'Garantida';
      default:
        return 'default';
    }
  }
}
export default new Utility();
