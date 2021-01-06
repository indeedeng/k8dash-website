(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{376:function(e,t,s){"use strict";s.r(t);var a=s(43),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),s("h2",{attrs:{id:"installing-k8dash-on-kubernetes-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-k8dash-on-kubernetes-cluster"}},[e._v("#")]),e._v(" Installing k8dash on Kubernetes Cluster")]),e._v(" "),s("p",[e._v("To Install and run k8dash on your Kubernetes cluster by following these steps:")]),e._v(" "),s("ol",[s("li",[e._v("Download kubernetes-k8dash.yaml")]),e._v(" "),s("li",[e._v("Deploy k8dash by running the following command:")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("kubectl apply -f \nhttps://raw.githubusercontent.com/herbrandson/k8dash/master/kubernetes-k8dash.yaml\n")])])]),s("p",[e._v("To access k8dash, you must make it publicly visible. If you have an ingress server setup, you can accomplish by adding a route like the following:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("kind: Ingress\napiVersion: extensions/v1beta1\nmetadata:\n  name: k8dash\n  namespace: kube-system\nspec:\n  rules:\n  -\n    host: k8dash.example.com\n    http:\n      paths:\n      -\n        path: /\n        backend:\n          serviceName: k8dash\n          servicePort: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Sign In\n"),s("ul",[s("li",[e._v("Setting Up a Service Account Token "),s("br"),e._v("\nThe first (and easiest) option is to create a dedicated service account. This can be accomplished using the following script:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create the service account in the current namespace (we assume default)")]),e._v("\nkubectl create serviceaccount k8dash-sa\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Give that service account root on the cluster")]),e._v("\nkubectl create clusterrolebinding k8dash-sa --clusterrole"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cluster-admin --serviceaccount"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default:k8dash-sa\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Find the secret that was created to hold the token for the SA")]),e._v("\nkubectl get secrets\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Show the contents of the secret to extract the token")]),e._v("\nkubectl describe secret k8dash-sa-token-xxxxx\n")])])]),e._v("Retrieve the "),s("code",[e._v("token")]),e._v(" value from the secret and enter it into the login screen to access the dashboard.")]),e._v(" "),s("li",[e._v("You can also log in to k8dash with OIDC")])])]),e._v(" "),s("li",[e._v("Optional: Use NodePort with k8dash")])]),e._v(" "),s("h2",{attrs:{id:"installing-metrics-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-metrics-server"}},[e._v("#")]),e._v(" Installing Metrics Server")]),e._v(" "),s("p",[e._v("k8dash relies heavily on metrics-server to display real-time cluster metrics. It is strongly recommended that you install metrics-server for the best experience from k8dash.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/kubernetes-incubator/metrics-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing metrics-server"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://medium.com/@waleedkhan91/how-to-configure-metrics-server-on-kubeadm-provisioned-kubernetes-cluster-f755a2ac43a2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Running metrics-server with kubeadm"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"running-oidc-on-k8dash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-oidc-on-k8dash"}},[e._v("#")]),e._v(" Running OIDC on k8dash")]),e._v(" "),s("p",[e._v("k8dash makes using OpenId Connect for authentication easy. Assuming your cluster is configured to use OIDC, all you need to do is create a secret containing your credentials and run the kubernetes-k8dash-oidc.yaml config.\nTo learn more about configuring a cluster for OIDC, check out these great links:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authenticating in Kubernetes"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://medium.com/@mrbobbytables/kubernetes-day-2-operations-authn-authz-with-oidc-and-a-little-help-from-keycloak-de4ea1bdbbe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes Day 2 Operations: AuthN/AuthZ with OIDC and a Little Help From Keycloak"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://medium.com/@int128/kubectl-with-openid-connect-43120b451672",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubectl with OpenID Connect"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("You can deploy k8dash with OIDC support using something like the following script..."),s("br"),s("br"),e._v(" "),s("strong",[e._v("NOTE:")]),e._v(" never trust a file downloaded from the internet. Make sure to review the contents of kubernetes-k8dash-oidc.yaml before running the script below.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("OIDC_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("put your endpoint url here"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". something like https://accounts.google.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("OIDC_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("put your "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" here"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". something like blah-blah-blah.apps.googleusercontent.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("OIDC_SECRET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("put your oidc secret here"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\nkubectl create secret -n kube-system generic k8dash "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$OIDC_URL")]),e._v('"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$OIDC_ID")]),e._v('"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$OIDC_SECRET")]),e._v('"')]),e._v("\n")])])]),s("p",[e._v("kubectl apply -f https://raw.githubusercontent.com/herbrandson/k8dash/master/kubernetes-k8dash-oidc.yaml")]),e._v(" "),s("p",[e._v("Additionally, there are a few other OIDC options you can provide via environment variables. First is "),s("code",[e._v("OIDC_SCOPES")]),e._v(". The default value for this value is "),s("code",[e._v("openid email")]),e._v(", but additional scopes can also be added using something like"),s("code",[e._v('OIDC_SCOPES="openid email groups"')]),e._v("."),s("br"),s("br"),e._v("\nThe other option is"),s("code",[e._v("OIDC_METADATA")]),e._v(". k8dash uses the excellent node-openid-client module. "),s("code",[e._v("OIDC_METADATA")]),e._v(" will take a json string and pass it to the Client constructor. Docs here. For example, "),s("code",[e._v('OIDC_METADATA=\'{"token_endpoint_auth_method":"client_secret_post"}')])]),e._v(" "),s("h2",{attrs:{id:"running-k8dash-with-nodeport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-k8dash-with-nodeport"}},[e._v("#")]),e._v(" Running k8dash with Nodeport")]),e._v(" "),s("p",[e._v("If you do not have an ingress server setup, you can utilize a NodePort service as configured in the kubernetes-k8dash-nodeport.yaml. This is ideal when creating a single node master, or if you want to get up and running as fast as possible.\nThis will map the k8dash port 4654 to a randomly selected port on the running node. The assigned port can be found using")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ kubectl get svc --namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube-system\n\nNAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("          AGE\nk8dash     NodePort    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.107")]),e._v(".107.62   "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4654")]),e._v(":32565/TCP   1m\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);