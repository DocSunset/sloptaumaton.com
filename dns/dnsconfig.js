// sloptaumatons DNS, as code. Edit, then: dns/run preview   (dns/run push applies — his approve first).
//
// Main domain: sloptaumatons.com (plural) on GitHub Pages; sloptaumaton.com forwards to it.
// The swap runs in two stages around his push of the site's CNAME file:
//   stage=A  plural → GitHub Pages (singular untouched)      dns/run preview -v stage=A
//   (he pushes CNAME = sloptaumatons.com; Pages picks it up)
//   stage=B  singular → Porkbun URL forward to the plural    dns/run preview -v stage=B   (the default)
// Porkbun URL forwards need the name to resolve to uixie.porkbun.com.

var STAGE = (typeof stage === "undefined") ? "B" : stage;
var DSP_PORKBUN = NewDnsProvider("porkbun", "");
var REG_NONE = NewRegistrar("none");

var GITHUB_PAGES = [
	A("@", "185.199.108.153"), A("@", "185.199.109.153"),
	A("@", "185.199.110.153"), A("@", "185.199.111.153"),
	AAAA("@", "2606:50c0:8000::153"), AAAA("@", "2606:50c0:8001::153"),
	AAAA("@", "2606:50c0:8002::153"), AAAA("@", "2606:50c0:8003::153"),
	CNAME("www", "docsunset.github.io."),
];

// Porkbun email forwarding (hello@ etc.) — keep on both.
var MAIL = [
	MX("@", 10, "fwd1.porkbun.com."),
	MX("@", 20, "fwd2.porkbun.com."),
	TXT("@", "v=spf1 include:_spf.porkbun.com ~all"),
];

D("sloptaumatons.com", REG_NONE,
	DnsProvider(DSP_PORKBUN),
	DefaultTTL(600),
	GITHUB_PAGES,
	MAIL,
	TXT("_acme-challenge", "aMlAL_NuDdnb3ixu_hcjatcQa3DORQhv-W-6um1WU_c"),
	TXT("_acme-challenge", "QV5DV-r4zSLo5x6g7-B7hKkr8iEpEBlwBTy0TB8bKxc"),
	// The footer link: recursive.sloptaumatons.com → the portfolio.
	CNAME("*", "uixie.porkbun.com."),   // Porkbun URL forwards (recursive.) resolve via uixie; www above wins
	URL("recursive", "https://sloptaumatons.com"),
);

D("sloptaumaton.com", REG_NONE,
	DnsProvider(DSP_PORKBUN),
	DefaultTTL(600),
	MAIL,
	TXT("_acme-challenge", "7QLoMEuELJ4clV-NXBwaYL8PHhH-QVqRL9GhaPhlLcE"),
	TXT("_acme-challenge", "etEDkUx5kNIRGDCFqFW9PTAHLusz7zbP-n23AuEO1WY"),
	STAGE === "A"
		? [GITHUB_PAGES.slice(0, 8), CNAME("*", "docsunset.github.io."), URL("@", "http://sloptaumaton-com.l.ink")]
		: [CNAME("*", "uixie.porkbun.com."), URL("@", "https://sloptaumatons.com")],
);
