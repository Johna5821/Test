  /**
   * @title Call an external API
   * @category Tutorial
   * @author Botpress, Inc.
   */
  const callApi = async () => {
    var axios = require('axios')
    var data = JSON.stringify({
      fields: {
        summary: 'Robo has requested for document update',
        issuetype: {
          name: 'Bug'
        },
        reporter: {
          id: '622ec29d1dcf800070e7dece'
        },
        project: {
          key: 'PLM'
        },
        description: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  //text: 'Order entry fails when selecting supplier.',
                  text: session.comments,
                  type: 'text'
                }
              ]
            }
          ]
        }
      }
    })

    var config = {
      method: 'post',
      url: 'https://bryanlobo.atlassian.net/rest/api/3/issue',
      auth: {
        username: 'sacrificialbeast@gmail.com',
        password: '5kHMt2yeQ579JfDTnhrxBFAC'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }
    const data2 = await axios(config)
    //const releaseNotesUrl = mostRecentRelease.self
    const displaymsg = data2.data.key
    const jiraUrl = 'https://bryanlobo.atlassian.net/browse/' + displaymsg
    const message = {
      type: 'text',
      text: `I created a Jira ticket here is the link -\n\n[#Your Jira Ticket](${jiraUrl})`,
      // Markdown enables rich content, for example links or bold text. Otherwise, content will be displayed as-is
      markdown: true
    }

    // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
    await bp.events.replyToEvent(event, [message])

    // You could also save the complete response in the session, then use it later
    //session.response = data
  }

  // Actions are async, so make sure to return a promise
  return callApi()