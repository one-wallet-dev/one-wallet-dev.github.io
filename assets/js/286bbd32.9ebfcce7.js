"use strict";(self.webpackChunkone_wallet=self.webpackChunkone_wallet||[]).push([[873],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(d,i(i({ref:t},h),{},{components:n})):o.createElement(d,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l=void 0,c={unversionedId:"Client Security",id:"Client Security",title:"Client Security",description:"Client Security",source:"@site/docs/Client Security.md",sourceDirName:".",slug:"/Client Security",permalink:"/docs/Client Security",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client Security.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"homeSidebar",previous:{title:"Call-for-Developers",permalink:"/docs/Call-for-Developers"},next:{title:"Security Goals",permalink:"/docs/Security-Goals"}},h={},u=[{value:"Client Security",id:"client-security",level:2},{value:"Notations",id:"notations",level:3},{value:"Solutions",id:"solutions",level:3},{value:"I. Controlled Randomness",id:"i-controlled-randomness",level:4},{value:"II. Complex Hash Function",id:"ii-complex-hash-function",level:4},{value:"III. Scrambled Memory Layout",id:"iii-scrambled-memory-layout",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"client-security"},"Client Security"),(0,r.kt)("p",null,"As noted in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polymorpher/one-wallet/issues/5"},"https://github.com/polymorpher/one-wallet/issues/5"),", in ONE Wallet v0.1 the authenticator cannot provide security protection if the client is compromised. A compromised client means the information stored on the client is leaked to a malicious third-party. In the current setup, the third-party may use these leaked information to easily reverse engineer (by brute force) the proof needed to perform an unauthorized transfer from ONE Wallet. The 6-digit code input from Google Authenticator would not be required."),(0,r.kt)("p",null,"To quote from the Github issue:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The core weakness resides in the small search space in how EOTP is generated from an OTP and several other client-side parameters (hseed, nonce). See code at"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/polymorpher/one-wallet/blob/ae1b113cdfe022d2ec65152e3b8654f27f756d99/code/lib/onewallet.js#L25"},"https://github.com/polymorpher/one-wallet/blob/ae1b113cdfe022d2ec65152e3b8654f27f756d99/code/lib/onewallet.js#L25")),(0,r.kt)("p",{parentName:"blockquote"},"Since the OTP is confined to a 6-digit numerical number, and the generation process relies on SHA256, the right OTP (and by extension, its EOTP) at any given time can be easily enumerated by brute-force, for any given leaf hash value. See for the code of doing so at "),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/polymorpher/one-wallet/blob/afe39e657df1522ee8941e386025c4ddafc3ab94/code/lib/onewallet.js#L141"},"https://github.com/polymorpher/one-wallet/blob/afe39e657df1522ee8941e386025c4ddafc3ab94/code/lib/onewallet.js#L141")," ")),(0,r.kt)("p",null,"An adequate solution must make it exceedingly difficult, if not practically impossible, for any party to perform any transfer (or similar operations) without the input from the Google Authenticator. At the same time, it must not significantly slow down the wallet creation process, or the process of making an authorized operation with the correct authenticator code."),(0,r.kt)("p",null,"This leaves us several options to enhance the security:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Substantially increase the search space required for brute force attack, from the current 1 million possible OTPs."),(0,r.kt)("li",{parentName:"ol"},"Substantially increase the memory required for enumerating or caching all possibilities during a brute force attack."),(0,r.kt)("li",{parentName:"ol"},"Substantially increase the computation cost and complexity for hash functions used in generating EOTP (Encoded OTPs) such that they are difficult to be executed in computing processors (e.g. GPU, FPGA, ASIC)")),(0,r.kt)("h3",{id:"notations"},"Notations"),(0,r.kt)("p",null,"We denote the size of the search space of OTPs by ",(0,r.kt)("strong",{parentName:"p"},"M"),", the number of leaves in the Merkle Tree as ",(0,r.kt)("strong",{parentName:"p"},"N")," (such that each operation requires a unique EOTP, which corresponds to each leaf). Note that ",(0,r.kt)("strong",{parentName:"p"},"N")," is also the product of the number of time intervals in the Merkle Tree, times the number of operations the client wants to execute per time interval."),(0,r.kt)("p",null,"In a standard setup, ",(0,r.kt)("strong",{parentName:"p"},"M")," is 10",(0,r.kt)("sup",null,"6")," and ",(0,r.kt)("strong",{parentName:"p"},"N")," is also roughly 10",(0,r.kt)("sup",null,"6"),". This two numbers should not be confused with each other. "),(0,r.kt)("p",null,"The choice of ",(0,r.kt)("strong",{parentName:"p"},"M")," is limited by the number of digits supported by Google Authenticator. In Android, this is unfortunately fixed to 6 at this time. "),(0,r.kt)("p",null,"The choice of ",(0,r.kt)("strong",{parentName:"p"},"N")," is set by the lifespan of the wallet and the number of operations per time interval. The time interval duration is fixed at 30 seconds at this time due to limitation of Android Google Authenticator. The default lifespan of a wallet is 1 year, which leads to 3600 ",(0,r.kt)("em",{parentName:"p"}," 24 / 30 ")," 365 = 1051200 ~= 10",(0,r.kt)("sup",null,"6")," leafs."),(0,r.kt)("p",null,"We also denote the hash of the OTP Seed as ",(0,r.kt)("em",{parentName:"p"},"k",(0,r.kt)("sub",null,"h"))," and the OTP Seed itself as ",(0,r.kt)("em",{parentName:"p"},"k"),", similar to the notation in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polymorpher/one-wallet/blob/43197c70e36cb58c2884c423c1e665feff232042/wiki/protocol.pdf"},"Protocol"),".  "),(0,r.kt)("p",null,"As described in Protocol \xa7 1.1.5, each leaf node at index ",(0,r.kt)("em",{parentName:"p"},"i")," is computed by the following process, which we will denote as ",(0,r.kt)("strong",{parentName:"p"}," GenLeaf"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Taking first 26 bytes of ",(0,r.kt)("em",{parentName:"li"},"k",(0,r.kt)("sub",null,"h")),", and concatenate with 2 bytes of nonce, and 4 bytes of OTP corresponding to index ",(0,r.kt)("em",{parentName:"li"},"i"),". All bytes are in big endian encoding."),(0,r.kt)("li",{parentName:"ol"},"Hash the 32-byte result in (1) (e.g. SHA256 in Protocol). Denote this as EOTP."),(0,r.kt)("li",{parentName:"ol"},"Hash the 32-byte output in (2) (e.g. SHA256 in Protocol). This is the value of a leaf node.")),(0,r.kt)("p",null,"For brevity, we refer to the time when the client needs to execute some operation (such as transfer) that requires an OTP code as ",(0,r.kt)("strong",{parentName:"p"},"runtime"),". We refer to the process when the wallet is created as ",(0,r.kt)("strong",{parentName:"p"},"setup"),"."),(0,r.kt)("h3",{id:"solutions"},"Solutions"),(0,r.kt)("h4",{id:"i-controlled-randomness"},"I. Controlled Randomness"),(0,r.kt)("p",null,"We can alter step (1) of the ",(0,r.kt)("strong",{parentName:"p"},"GenLeaf")," process by taking first 22 bytes of ",(0,r.kt)("em",{parentName:"p"},"k",(0,r.kt)("sub",null,"h")),", and replace the other 4 bytes with a randomly generated number between ","[1, \xb5]",", where \xb5 is a difficulty parameter we choose. After EOTP and its leaf is generated, the randomly generated number is discarded. Setup would not be slowed down because sampling from ","[1, \xb5]"," can be done in constant time. The randomness would not affect the recoverability of the wallet because the setup can be made repeatable and deterministic by using the OTP seed as the seed for random number generators. "),(0,r.kt)("p",null,"At runtime, the client possessing the correct OTP would still have to iterate through ","[1, \xb5]"," and use the altered step (1) with the steps (2) and (3) above until it can produce a hash value equals to the value in the leaf node. In comparison, an attacker without the correct OTP would have to enumerate permutations of ","[1, \xb5]"," and [1, M). In other words, the attacker would have to perform M times more operations than the user."),(0,r.kt)("p",null,"If we choose \xb5=10",(0,r.kt)("sup",null,"6"),", the attacker would need compute 10",(0,r.kt)("sup",null,"12")," hashes to brute-force both the randomly generated number and the OTP. We know \xb5=10",(0,r.kt)("sup",null,"6")," is a practical number for runtime, since in ONE Wallet v0.1 we perform this number of hashes every time we generate a new wallet, and it is typically completed within less than a few seconds in the client's browser. "),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/siseci/hashcat-benchmark-comparison/blob/45a27b32a2f24d317cc29741d64fc739f3a30cb5/1x%20Gtx%201080%20TI%20with%20Overclock%20Hashcat%20Benchmark"},"hashcat benchmark")," for reference, a highend NVIDIA GPU would enable the attacker to complete the brute-force in roughly 10 minutes. However, if we require the user to provide two OTPs inputs, the attacker's job would become practically impossible: now he would need 19 years to complete the bruteforce using a highend NVIDIA GPU. The attacker would need to design an ASIC on par with the performance of AntMiner in Bitcoin mining (~100TH/s) to complete the bruteforce in a reasonable amount of time. At ~100TH/s, the time required is ~3 hours."),(0,r.kt)("p",null,"To increase the security strength of our solution, we can combine this technique with some of the following, to make even AntMiner impractical for double OTP, and to make GPU attack exceedingly slow and uneconomical even for single OTP."),(0,r.kt)("h4",{id:"ii-complex-hash-function"},"II. Complex Hash Function"),(0,r.kt)("p",null,"We can improve step (2) of ",(0,r.kt)("strong",{parentName:"p"},"GenLeaf"),' by replacing the SHA256 hash function with a more complex alternative. Ideally, the alternative should be easy to compute on a user\'s device (using standard CPU and RAM) but much "harder" on devices for massive parallel computing (e.g. GPU, FPGA, ASIC). A natural starting point is scrypt, which can be configured to use an arbitrarily large amount of memory that is required to produce the hash result. In particular, scrypt is used by multiple cryptocurrency (such as Litecoin, Doge, and others) in their mining algorithms with the initial intent to make mining less advantageous on GPU, and to be ASIC-resilient. The design was effective initially',(0,r.kt)("sup",null,(0,r.kt)("a",{parentName:"p",href:"#f1"},"1")),", but ultimately failed to achieve ASIC resilience",(0,r.kt)("sup",null,(0,r.kt)("a",{parentName:"p",href:"#f2"},"2")),", because over the last few years it became considerably easier to fit reasonably sized memory chips on ASIC, and the choice of the security parameters did not consider such advancement. Nonetheless, based on our own benchmark result using NVIDIA Tesla K80 GPUs, by replacing the hash function to scrypt (even under very low memory settings), it would roughly increase 100-1000 the amount of time the attacker would need to complete the bruteforce for a client secured with a single OTP and the Controlled Randomness technique in (1)."),(0,r.kt)("p",null,"After comparing several alternatives, we believe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/P-H-C/phc-winner-argon2"},"argon2")," is the optimal choice to replace step (2) of ",(0,r.kt)("strong",{parentName:"p"},"GenLeaf")," in the next version of ONE Wallet. Similar to scrypt, it can be configured to use a large size of memory and impose an arbitary workload to slow down the computation. Aside for its multiple advantages over other candidates (which are discussed at length in their Github repository, the password-hashing competition, and their paper), here are the other factors we have considered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Argon2 has a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/antelle/argon2-browser"},"browser-based implementation")," based on WebAssembly. It offers satisfactory performance under reasonably low memory settings, and can complete within a reasonable amount of time for 10",(0,r.kt)("sup",null,"6")," repeatitions. Therefore, it would not slow down the setup process"),(0,r.kt)("li",{parentName:"ul"},"Based on our knowledge, no one has built an ASIC miner for computing Argon2 hashes at this time. "),(0,r.kt)("li",{parentName:"ul"},"Argon2 is not yet even popular enough to be included in ",(0,r.kt)("a",{parentName:"li",href:"https://hashcat.net/hashcat/"},"hashcat"),", the well-known GPU/FPGA based password recovery tool by brute-forcing hash computations via GPU.")),(0,r.kt)("a",{name:"f1"},"[1]")," See an outdated [Litecoin Mining Hardware Comparison](https://litecoin.info/index.php/Mining_hardware_comparison)",(0,r.kt)("a",{name:"f2"},"[2]")," See [AntMiner L3+](https://shop.bitmain.com/promote/antminer_l3_litecoin_asic_scrypt_miner/specification) which achieves 504MH/s",(0,r.kt)("h4",{id:"iii-scrambled-memory-layout"},"III. Scrambled Memory Layout"),(0,r.kt)("p",null,"We can further improve the security of ",(0,r.kt)("strong",{parentName:"p"},"GenLeaf")," by placing the result in the memory where it would be difficult for the attacker to locate, but would be easy for the client with the correct OTP to retrieve. A naive construct following this intuition is to store each leaf at the position of the OTP they correspond to and a pointer to their neighbor. Unfortunately this naive approach leaks the OTP code of each leaf and renders OTP useless. A mild improvement from the naive approach is to swap each leaf with its neighbor's position (after first repositioning all leaves to their OTP values) and remove the pointer to the neighbor (since neighbor is part of the Merkle Proof, not the leaf node itself). This construct no longer leaks the OTP for each leaf, but an attacker would still be unable to identify the location for each pair of leaves by pre-comptuing the parent hash of all pairs of leaves, which can be done in M",(0,r.kt)("sup",null,"2")," operations and would only require 32 bytes * M amount of memory. Since each operation is a SHA256 hash, based on the analysis in Section I, an attacker with a high-end GPU only needs ~10 minutes to identify exact positions of all leaves before they are scrambled. Moreover, we cannot use the techniques in Section II by replacing the hash function to a complex one, since the hash function must be supported on blockchain as well and must be economical and fast enough to compute on blockchain."),(0,r.kt)("p",null,"These two naive approaches are unsatisfactory because they are missing a few critical elements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"They did not use randomness."),(0,r.kt)("li",{parentName:"ol"},"Their position mapping function for each leaf is invertible."),(0,r.kt)("li",{parentName:"ol"},"They did not expand the search space for brute-force attacker (confined within M",(0,r.kt)("sup",null,"2"),")")),(0,r.kt)("p",null,"To address these issues, we introduce the following technique:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For each leaf, we use the corresponding OTP as the seed for a random number generator, to generate 4 consecutive numbers between ","[1, 4M]",". Note this mapping is deterministic (hence repeatable) but is not invertible."),(0,r.kt)("li",{parentName:"ol"},"We break down the leaf into 4 parts of 8-byte chunks, and store the chunks at the position given by the 4 random numbers generated in the previous step."),(0,r.kt)("li",{parentName:"ol"},'If any two chunks fall into the same position, they are stored in a list at that position. For brevity we call this scenario a "collision".'),(0,r.kt)("li",{parentName:"ol"},"For each pair of neighbors, we swap the position of their chunks since we only need the neighbor to complete the Merkle Proof, not the leaf itself.")),(0,r.kt)("p",null,"At runtime, the client can easily recover the positions of each chunk by repeating (1). If there is a list consisting of more than one element at any position, the client can simply enumerate all possible combinations using each of the element in the list. In practice, the chance that any position has more than 1 or 2 elements in the list is very slim, since our the size of our random space in (1) equals to the number of elements we want to generate. We can further increase the space to increase sparsity and reduce collision. After recovering the chunks, the client can complete the Merkle Proof and proceed as usual. If there are multiple combinations of chunks due to collision, the client may test for each combination of whether it is correct, by computing the current leaf using ",(0,r.kt)("strong",{parentName:"p"},"GenLeaf")," and the user provided OTP, then check whether the hash of the concatenation of the current leaf and the neighbor chunk-combination candidate equals to the required hash value in the parent node corresponding to current timestamp or index."),(0,r.kt)("p",null,"With this approach the number of operations required for simple brute-force is increased to (4M)",(0,r.kt)("sup",null,"8")," since the attacker would have to enumerate all possible combinations of chunks for each pair of neighbors and test whether they produce the required hash value in a any parent node. There may be more efficient brute-force attacks which we have not explored or analyzed."),(0,r.kt)("p",null,"Overall, this techniques is the least straightforward, but may be the most secure and the fastest for runtime execution. In any case, this technique can be composed with the techniques in Part I or II or both to obtain multiplicative security protection, since they operate at different part of the process."))}m.isMDXComponent=!0}}]);