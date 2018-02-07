import Vue from "vue";

var defaultData = function () {
  return {
    jobSubmissionInterfaceId: null,
    alternativeSSHHostName: null,
    sshPort: null,
    securityProtocol: null,
    resourceJobManager: {
      resourceJobManagerId: null,
      resourceJobManagerType: null,
      pushMonitoringEndpoint: null,
      jobManagerBinPath: null,
      jobManagerCommands: {
        '': ''
      },
      parallelismPrefix: {
        '': ''
      }
    },
    monitorMode: null,
    batchQueueEmailSenders: [null]

  }
}
export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    updateStore: function (state, {data, id}) {
      state.data[id] = data
    },
    updateResourceJobManager: function (state, {id, data}) {
      state.data[id].resourceJobManager = data
    },
    resetStore: function (state, {id, resetFields = []}) {
      if (resetFields.length == 0) {
        state.data[id] = defaultData()
      } else {
        let defData = defaultData();
        for (let resetField of resetFields) {
          Vue.set(state.data[id], resetField, defData[resetField])
        }
      }
    },
    addEmptyData: function (state,id) {
      console.log("Called Empty data")
      state.data[id] = defaultData()
    }
  },
  getters: {
    data: (state) => id => {
      return state.data[id]
    },
  },
  actions: {
    save: function ({commit, state, rootState}, id) {
    },
  }
}
