  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} mappedValue - mapped value
   */
  const myAction = async mappedValue => {
    temp.customUrl =
      'https://tatatechnologies-my.sharepoint.com/:b:/r/personal/mpp920937_tatatechnologies_com/Documents/DummyDataBotpress/' +
      mappedValue +
      '.pdf'
    bp.logger.info(`*************Hello***************`)
    bp.logger.info(temp.customUrl)
    //temp.customUrl =
    //  'https://tatatechnologies.sharepoint.com/sites/HarmanProject/Shared%20Documents/PLM%20Consultancy/Project%20Execution/01_Kick-Off/Harman_Business%20Process%20Consulting%20Kickoff%20Final.pdf'
  }

  return myAction(args.mappedValue)