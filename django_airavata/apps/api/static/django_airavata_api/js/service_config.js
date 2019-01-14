import ApplicationDeploymentDescription from "./models/ApplicationDeploymentDescription";
import ApplicationInterfaceDefinition from "./models/ApplicationInterfaceDefinition";
import ApplicationModule from "./models/ApplicationModule";
import BatchQueue from "./models/BatchQueue";
import ComputeResourceDescription from "./models/ComputeResourceDescription";
import CredentialSummary from "./models/CredentialSummary";
import DataProduct from "./models/DataProduct";
import Experiment from "./models/Experiment";
import ExperimentSummary from "./models/ExperimentSummary";
import GatewayResourceProfile from "./models/GatewayResourceProfile";
import Group from "./models/Group";
import GroupResourceProfile from "./models/GroupResourceProfile";
import Parser from "./models/Parser";
import SharedEntity from "./models/SharedEntity";
import StoragePreference from "./models/StoragePreference";
import StorageResourceDescription from "./models/StorageResourceDescription";
import UserProfile from "./models/UserProfile";

const post = "post";
const get = "get";
const put = "put";
const del = "delete";
/*
examples:

Generating Services based on the API view set
{
serviceName:{
url:'/example/api',
viewSet:true,
pagination: true/false,
modelClass: ModelClass,
}
}
Normal service configuration:
{
serviceName:{
serviceAction1:{
url:'/example/api/<look_up>',  # the <look_up> implies a path parameter lok_up
requestType:'post',
bodyParams:[...] # body parameter names for json parameter if body params id=s a list of array else an object with the param name for the body object
queryParams:[] # list query param names/ query param name to param name mapping
pagination:true # whether to treat the response as a paginated response


}
}
}
 */

export default {
  ApplicationDeployments: {
    url: "/api/application-deployments",
    viewSet: [
      {
        name: "list"
      },
      {
        name: "create"
      },
      {
        name: "retrieve"
      },
      {
        name: "update"
      },
      {
        name: "delete"
      },
      {
        name: "getQueues",
        url: "/api/application-deployments/<lookup>/queues/",
        requestType: "get",
        modelClass: BatchQueue
      }
    ],
    queryParams: ["appModuleId", "groupResourceProfileId"],
    modelClass: ApplicationDeploymentDescription
  },
  ApplicationInterfaces: {
    url: "/api/application-interfaces",
    viewSet: true,
    modelClass: ApplicationInterfaceDefinition
  },
  ApplicationModules: {
    url: "/api/applications",
    viewSet: [
      {
        name: "list"
      },
      {
        name: "create"
      },
      {
        name: "retrieve"
      },
      {
        name: "update"
      },
      {
        name: "delete"
      },
      {
        name: "getApplicationInterface",
        url: "/api/applications/<lookup>/application_interface/",
        requestType: "get",
        modelClass: ApplicationInterfaceDefinition
      },
      {
        name: "getApplicationDeployments",
        url: "/api/applications/<lookup>/application_deployments/",
        requestType: "get",
        modelClass: ApplicationDeploymentDescription
      },
      {
        name: "listAll",
        url: "/api/applications/list_all/",
        requestType: "get",
        modelClass: ApplicationModule
      }
    ],
    modelClass: ApplicationModule
  },
  ComputeResources: {
    url: "/api/compute-resources",
    viewSet: [
      {
        name: "retrieve"
      },
      {
        name: "names",
        url: "/api/compute-resources/all_names/",
        requestType: "get"
      },
      {
        name: "namesList",
        url: "/api/compute-resources/all_names_list/",
        requestType: "get"
      }
    ],
    modelClass: ComputeResourceDescription
  },
  CredentialSummaries: {
    url: "/api/credential-summaries/",
    viewSet: [
      {
        name: "list"
      },
      {
        name: "retrieve"
      },
      {
        name: "delete"
      },
      {
        name: "allSSHCredentials",
        url: "/api/credential-summaries/ssh/",
        requestType: "get",
        modelClass: CredentialSummary
      },
      {
        name: "allPasswordCredentials",
        url: "/api/credential-summaries/password/",
        requestType: "get",
        modelClass: CredentialSummary
      },
      {
        name: "createSSH",
        url: "/api/credential-summaries/create_ssh/",
        requestType: "post",
        bodyParams: {
          name: "data"
        },
        modelClass: CredentialSummary
      },
      {
        name: "createPassword",
        url: "/api/credential-summaries/create_password/",
        requestType: "post",
        bodyParams: {
          name: "data"
        },
        modelClass: CredentialSummary
      }
    ],
    modelClass: CredentialSummary
  },
  DataProducts: {
    url: "/api/data-products/",
    viewSet: [
      {
        name: "retrieve"
      }
    ],
    modelClass: DataProduct
  },
  Experiments: {
    url: "/api/experiments/",
    viewSet: [
      {
        name: "list"
      },
      {
        name: "create"
      },
      {
        name: "retrieve"
      },
      {
        name: "update"
      },
      {
        name: "delete"
      },
      {
        name: "launch",
        url: "/api/experiments/<lookup>/launch/",
        requestType: "post",
        modelClass: Experiment
      }
    ],
    modelClass: Experiment
  },
  ExperimentSearch: {
    url: "/api/experiment-search",
    viewSet: [
      {
        name: "list",
        initialDataParam: "initialData"
      }
    ],
    modelClass: ExperimentSummary,
    pagination: true,
    queryParams: ["limit", "offset"]
  },
  GatewayResourceProfiles: {
    url: "/api/gateway-resource-profiles/",
    viewSet: [
      {
        name: "list"
      },
      {
        name: "create"
      },
      {
        name: "retrieve"
      },
      {
        name: "update"
      },
      {
        name: "delete"
      },
      {
        name: "current",
        url: "/api/gateway-resource-profile/",
        requestType: "get",
        modelClass: GatewayResourceProfile
      }
    ],
    modelClass: GatewayResourceProfile
  },
  GroupResourceProfiles: {
    url: "/api/group-resource-profiles/",
    viewSet: true,
    modelClass: GroupResourceProfile
  },
  Groups: {
    url: "/api/groups",
    viewSet: true,
    pagination: true,
    queryParams: ["limit", "offset"],
    modelClass: Group
  },
  Parsers: {
    url: "/api/parsers",
    viewSet: true,
    queryParams: ["limit", "offset"],
    modelClass: Parser
  },
  SharedEntities: {
    url: "/api/shared-entities",
    viewSet: [
      {
        name: "retrieve"
      },
      {
        name: "update"
      },
      {
        name: "merge",
        url: "/api/shared-entities/<lookup>/merge/",
        bodyParams: {
          name: "data"
        },
        requestType: "put",
        modelClass: SharedEntity
      }
    ],
    modelClass: SharedEntity
  },
  StoragePreferences: {
    url: "/api/storage-preferences/",
    viewSet: true,
    modelClass: StoragePreference
  },
  StorageResources: {
    url: "/api/storage-resources",
    viewSet: [
      {
        name: "retrieve"
      },
      {
        name: "names",
        url: "/api/storage-resources/all_names/",
        requestType: "get"
      }
    ],
    modelClass: StorageResourceDescription
  },
  UserProfiles: {
    url: "/api/user-profiles",
    viewSet: [
      {
        name: "list"
      }
    ],
    modelClass: UserProfile
  }
};
