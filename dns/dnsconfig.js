// sloptaumatons DNS, as code. Edit, then: dns/run preview  (dns/run push applies; his approve first).

var DSP_PORKBUN = NewDnsProvider("porkbun", "");
var REG_NONE = NewRegistrar("none");

D("sloptaumatons.com", REG_NONE,
	DnsProvider(DSP_PORKBUN),
	DefaultTTL(600),
	CNAME("*", "uixie.porkbun.com."),
	MX("@", 10, "fwd1.porkbun.com."),
	MX("@", 20, "fwd2.porkbun.com."),
	TXT("@", "v=spf1 include:_spf.porkbun.com ~all"),
	TXT("_acme-challenge", "aMlAL_NuDdnb3ixu_hcjatcQa3DORQhv-W-6um1WU_c"),
	TXT("_acme-challenge", "QV5DV-r4zSLo5x6g7-B7hKkr8iEpEBlwBTy0TB8bKxc"),
	URL("recursive", "http://sloptaumaton.com"),
	URL("@", "https://sloptaumaton.com"),
);

D("sloptaumaton.com", REG_NONE,
	DnsProvider(DSP_PORKBUN),
	DefaultTTL(600),
	A("@", "185.199.108.153"),
	A("@", "185.199.109.153"),
	A("@", "185.199.110.153"),
	A("@", "185.199.111.153"),
	AAAA("@", "2606:50c0:8000::153"),
	AAAA("@", "2606:50c0:8001::153"),
	AAAA("@", "2606:50c0:8002::153"),
	AAAA("@", "2606:50c0:8003::153"),
	CNAME("*", "docsunset.github.io."),
	MX("@", 10, "fwd1.porkbun.com."),
	MX("@", 20, "fwd2.porkbun.com."),
	TXT("@", "v=spf1 include:_spf.porkbun.com ~all"),
	TXT("_acme-challenge", "7QLoMEuELJ4clV-NXBwaYL8PHhH-QVqRL9GhaPhlLcE"),
	TXT("_acme-challenge", "etEDkUx5kNIRGDCFqFW9PTAHLusz7zbP-n23AuEO1WY"),
	URL("@", "http://sloptaumaton-com.l.ink"),
);

