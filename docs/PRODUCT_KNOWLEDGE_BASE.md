# Product Knowledge Base

**Purpose:** Comprehensive product information for sales, support, and customer success teams  
**Last Updated:** December 2025

---

## 📚 Table of Contents

1. [Veeam Products](#veeam-products)
2. [SentinelOne](#sentinelone)
3. [Rainforest.tech](#rainforesttech)
4. [ExaGrid](#exagrid)
5. [Plattano Hot Storage](#plattano-hot-storage)
6. [VMware Integration](#vmware-integration)
7. [Common Integrations](#common-integrations)

---

## 💾 Veeam Products

### Veeam Backup & Replication

**Overview:**
Industry-leading backup and recovery solution for virtualized and physical environments.

**Key Features:**
- Incremental forever backup (saves storage, fast recovery)
- Instant VM recovery (< 15 minutes RTO)
- Replication for disaster recovery
- Support for VMware vSphere, Microsoft Hyper-V, Nutanix AHV
- Physical server and workstation backup
- Cloud backup integration (AWS, Azure, GCP)
- Ransomware protection (immutable backups, air-gap)

**Use Cases:**
- Companies with on-premises virtualized infrastructure
- Organizations requiring < 15 minute RTO
- Environments with VMware, Hyper-V, or Nutanix
- Companies needing DR replication

**Licensing:**
- Per socket (CPU socket) - most common
- Per instance (for cloud workloads)
- Per workload (for specific use cases)
- Editions: Foundation, Standard, Enterprise, Enterprise Plus

**Typical Pricing:**
- Small (10-50 VMs): $5K-$20K/year
- Medium (50-200 VMs): $20K-$75K/year
- Large (200+ VMs): $75K-$500K+/year

**Technical Requirements:**
- Windows Server 2012+ or Linux
- 4GB+ RAM (8GB+ recommended)
- Network connectivity to source and target
- Storage repository (ExaGrid, NAS, cloud)

**Common Integrations:**
- VMware vSphere
- Microsoft Hyper-V
- Nutanix AHV
- ExaGrid (certified integration)
- Cloud storage (AWS S3, Azure Blob, GCP)
- Plattano Hot Storage (S3-compatible)

---

### Veeam for Microsoft 365

**Overview:**
Complete backup solution for Microsoft 365 services (Exchange, SharePoint, OneDrive, Teams).

**Key Features:**
- Backup for Exchange Online, SharePoint Online, OneDrive, Teams
- Granular recovery (item-level restore)
- Unlimited retention (compliance requirement)
- Advanced eDiscovery capabilities
- Compliance support (GDPR, HIPAA, SOX)
- Protection against accidental deletion
- Ransomware protection

**Use Cases:**
- Companies using Microsoft 365 exclusively
- Organizations with compliance requirements
- Need for eDiscovery and legal hold
- Protection against accidental deletion

**Licensing:**
- Per user/month (most common)
- Per mailbox (for Exchange-only)
- Annual or monthly billing

**Typical Pricing:**
- $2-$5 per user/month (volume discounts)

**Technical Requirements:**
- Veeam Backup for Microsoft 365 server
- Microsoft 365 API access
- Azure AD application registration
- Storage repository (on-prem or cloud)

**Common Integrations:**
- Microsoft 365 (Exchange, SharePoint, OneDrive, Teams)
- Azure AD
- Plattano Hot Storage (for cloud backup)

---

### Veeam Cloud Backup

**Overview:**
Native backup solution for cloud workloads (AWS, Azure, Google Cloud).

**Key Features:**
- Cloud VM backup (EC2, Azure VMs, GCE)
- Database backup (RDS, Azure SQL, Cloud SQL)
- Snapshot management
- Cross-region replication
- Cost optimization
- Native cloud integration

**Use Cases:**
- Cloud-native workloads
- Multi-cloud environments
- Cross-region disaster recovery
- Cloud cost optimization

**Licensing:**
- Per workload/month
- Per instance/month
- Annual or monthly billing

**Technical Requirements:**
- Cloud provider account (AWS, Azure, GCP)
- IAM permissions for backup operations
- Storage repository (cloud-native or S3-compatible)

---

### Veeam Recovery Orchestrator

**Overview:**
Automated disaster recovery orchestration and testing.

**Key Features:**
- Automated DR plans
- DR testing without production impact
- Automatic failover/failback
- Compliance reporting
- Runbook automation
- Integration with Veeam Backup & Replication

**Use Cases:**
- Companies with critical SLA requirements
- Strict compliance requirements
- Need for frequent DR testing
- Automated failover requirements

**Licensing:**
- Per VM or per site
- Annual licensing

**Technical Requirements:**
- Veeam Backup & Replication
- DR site infrastructure
- Network connectivity between sites

---

### Veeam ONE

**Overview:**
Monitoring, reporting, and analytics for Veeam infrastructure.

**Key Features:**
- 24/7 monitoring of backup infrastructure
- Capacity planning and forecasting
- Performance optimization recommendations
- Proactive alerts
- Compliance dashboards
- Cost analysis and optimization

**Use Cases:**
- Large Veeam environments
- Need for visibility and reporting
- Cost optimization requirements
- Compliance reporting needs

**Licensing:**
- Per socket
- Annual licensing

**Technical Requirements:**
- Veeam Backup & Replication
- Windows Server for Veeam ONE server
- Database (SQL Server or PostgreSQL)

---

## 🛡️ SentinelOne

**Overview:**
AI-powered endpoint protection platform (XDR) with autonomous threat detection and response.

**Key Features:**
- **Autonomous AI:** Detection and response without human intervention
- **Instant Response:** Threat blocking in < 1 second
- **XDR Platform:** Complete visibility (endpoint, cloud, identity)
- **Multi-OS Support:** Windows, Mac, Linux, mobile devices, containers
- **Ransomware Rollback:** Automatic rollback without data loss
- **Compliance:** PCI-DSS, HIPAA, SOC 2 certified
- **Performance:** Minimal impact on endpoint performance
- **Threat Hunting:** Integrated threat hunting capabilities

**Use Cases:**
- Companies with distributed endpoints
- Need for automatic threat response
- Heterogeneous environments (multi-OS)
- Zero Trust security model
- Ransomware protection requirements

**Licensing:**
- Per endpoint/month or per endpoint/year
- Volume discounts available
- Editions: Core, Control, Complete

**Typical Pricing:**
- $5-$15 per endpoint/month (volume discounts)

**Technical Requirements:**
- Supported operating systems (Windows, Mac, Linux)
- Network connectivity to SentinelOne cloud
- Firewall rules (HTTPS outbound)
- Minimum system resources (varies by OS)

**Deployment:**
- Cloud-based management console
- Agent installation on endpoints
- Policy configuration
- Integration with existing security tools

**Common Integrations:**
- SIEM systems (Splunk, QRadar, etc.)
- Identity providers (Azure AD, Okta)
- Cloud security tools
- Veeam (for backup integration)

---

## 🌐 Rainforest.tech

**Overview:**
Brand protection and dark web leak detection platform.

**Key Features:**
- **Brand Intelligence:** 24/7 brand monitoring across web
- **Leak Detection:** Detection of leaked credentials on dark web
- **Fraud Protection:** Protection against phishing and fraud
- **Cloud Security:** Cloud app monitoring and security
- **App Security:** Vulnerability analysis for applications
- **Takedown Service:** Removal of fraudulent sites and content
- **Executive Reports:** High-level security and brand reports

**Use Cases:**
- Companies with strong digital presence
- E-commerce and fintech companies
- Intellectual property protection
- Brand reputation management
- Credential leak prevention

**Licensing:**
- Per domain/month
- Per monitoring scope
- Annual or monthly billing

**Typical Pricing:**
- $500-$5K/month (depends on monitoring scope)

**Technical Requirements:**
- Domain ownership verification
- DNS access (for some features)
- API credentials (for integrations)

**Deployment:**
- Cloud-based platform
- Domain configuration
- Monitoring scope setup
- Alert configuration

**Common Integrations:**
- SIEM systems
- Security orchestration tools
- Incident response platforms

---

## 📦 ExaGrid

**Overview:**
Backup storage appliance with advanced deduplication for on-premises environments.

**Key Features:**
- **Advanced Deduplication:** Up to 95% data reduction
- **Ultra-Fast Performance:** Fastest backup and restore speeds
- **Linear Scalability:** Add appliances as needed (landing zone + repository)
- **Retention Lock:** Ransomware protection (immutable storage)
- **Native Integration:** Certified integration with Veeam, Commvault, Veritas
- **Tiered Storage:** Landing zone (fast) + repository (long-term)
- **No Fork-Lift Upgrades:** Add capacity without replacing appliances

**Use Cases:**
- Large Veeam environments (>10TB)
- Need for performance and speed
- Predictable growth patterns
- On-premises infrastructure
- Cost optimization through deduplication

**Licensing:**
- Per appliance (one-time purchase)
- Capacity-based pricing
- Support and maintenance (annual)

**Typical Pricing:**
- Starting at ~$50K for 10TB (varies by model)
- Scales linearly with capacity

**Technical Requirements:**
- Network connectivity (1GbE or 10GbE)
- Power and cooling
- Rack space
- Integration with backup software (Veeam, etc.)

**Models:**
- Various models from 10TB to 100TB+ (usable capacity)
- Different performance tiers
- Expansion options available

**Common Integrations:**
- Veeam Backup & Replication (certified)
- Commvault
- Veritas NetBackup
- Other backup software (via SMB/NFS)

---

## ☁️ Plattano Hot Storage

**Overview:**
S3-compatible cloud storage solution with integrated ransomware protection.

**Key Features:**
- **S3 Compatible:** 100% compatible with S3 API (drop-in replacement)
- **Ransomware Protection:** Integrated immutability features
- **Transparent Pricing:** No hidden fees, flat rate pricing
- **Guaranteed Performance:** 99.9% uptime SLA
- **Multi-Region:** Global availability
- **Usage Analytics:** Real-time monitoring and reporting
- **Easy Migration:** Standard S3 API, no lock-in

**Backend:**
- Powered by Wasabi (cloud storage provider)
- S3-compatible API layer
- Managed by Plattano

**Use Cases:**
- Cloud-first workloads
- Off-site backup storage
- Unpredictable growth patterns
- No CAPEX requirement
- S3-compatible application storage

**Licensing:**
- Per TB/month (flat rate)
- Volume discounts available
- Pay-as-you-go model

**Typical Pricing:**
- $5-$10 per TB/month (volume discounts)

**Technical Requirements:**
- S3-compatible application or backup software
- Network connectivity (HTTPS)
- S3 access keys (provided by Plattano)

**Common Integrations:**
- Veeam Backup & Replication (S3 repository)
- Veeam for Microsoft 365 (S3 repository)
- Any S3-compatible application
- Backup software with S3 support

**Advantages:**
- No vendor lock-in (standard S3 API)
- Transparent pricing (no egress fees)
- Ransomware protection included
- Easy migration from other S3 providers

---

## 🖥️ VMware Integration

**Overview:**
VMware virtualization platform integration with Veeam and other solutions.

### Veeam + VMware

**Integration:**
- Veeam Backup & Replication supports VMware vSphere
- Direct integration via vSphere API
- No agent required on VMs
- Changed Block Tracking (CBT) for efficient backups

**Features:**
- VM-level backup and recovery
- Instant VM recovery
- Replication between vSphere environments
- vSphere tags and policies support
- Integration with vCenter Server

**Use Cases:**
- VMware vSphere environments
- Virtualized infrastructure backup
- DR replication between vSphere sites

### SentinelOne + VMware

**Integration:**
- SentinelOne agents can be deployed on VMware VMs
- Support for Windows, Linux VMs
- Integration with vCenter for deployment automation

**Features:**
- Agent deployment via vCenter
- VM-level protection
- Integration with VMware NSX (network security)

---

## 🔗 Common Integrations

### Veeam + ExaGrid
- **Type:** Certified integration
- **Benefits:** Fast backups, deduplication, scalability
- **Configuration:** ExaGrid as Veeam repository
- **Use Case:** Large Veeam environments needing performance

### Veeam + Plattano Hot Storage
- **Type:** S3-compatible repository
- **Benefits:** Cloud backup, cost-effective, scalable
- **Configuration:** S3 repository in Veeam
- **Use Case:** Off-site backup, cloud-first environments

### SentinelOne + Veeam
- **Type:** Security integration
- **Benefits:** Ransomware protection + backup recovery
- **Configuration:** SentinelOne detects threats, Veeam provides recovery
- **Use Case:** Comprehensive ransomware protection

### SentinelOne + Rainforest
- **Type:** Security stack
- **Benefits:** Endpoint protection + brand protection
- **Configuration:** Separate products, complementary
- **Use Case:** Comprehensive security coverage

---

## 📊 Comparison Tables

### Storage Solutions: ExaGrid vs Plattano Hot Storage

| Criterion | ExaGrid | Plattano Hot Storage |
|-----------|---------|---------------------|
| Deployment | On-premises | Cloud |
| CAPEX | Yes | No |
| Scalability | Linear | Unlimited |
| Performance | Ultra-fast | Fast |
| Maintenance | Minimal | Zero |
| Ideal for | >10TB on-prem | Cloud-first |
| Deduplication | Up to 95% | Backend handled |
| Integration | Native Veeam | S3-compatible |

### Cybersecurity: SentinelOne vs Rainforest

| Need | SentinelOne | Rainforest |
|------|-------------|------------|
| Endpoint protection | ✅ | ❌ |
| Brand monitoring | ❌ | ✅ |
| Automatic response | ✅ | ❌ |
| Leak detection | ❌ | ✅ |
| Compliance | ✅ | ✅ |
| Ransomware protection | ✅ | ❌ |

---

## 🎯 Solution Bundles

### Complete Data Protection Stack
- **Veeam Backup & Replication** (backup)
- **ExaGrid** or **Plattano Hot Storage** (storage)
- **Veeam Recovery Orchestrator** (DR automation)
- **Use Case:** Enterprise data protection

### Complete Security Stack
- **SentinelOne** (endpoint protection)
- **Rainforest.tech** (brand protection)
- **Use Case:** Comprehensive security coverage

### Cloud-First Stack
- **Veeam Cloud Backup** (cloud backup)
- **Plattano Hot Storage** (cloud storage)
- **Use Case:** Cloud-native environments

---

## 📞 Vendor Contacts

### Veeam
- **Support:** support.veeam.com
- **Phone:** [vendor contact]
- **Partner Portal:** partner.veeam.com

### SentinelOne
- **Support:** support.sentinelone.com
- **Phone:** [vendor contact]
- **Partner Portal:** [vendor portal]

### Rainforest.tech
- **Support:** [vendor contact]
- **Phone:** [vendor contact]

### ExaGrid
- **Support:** support.exagrid.com
- **Phone:** [vendor contact]
- **Partner Portal:** [vendor portal]

### Wasabi (Plattano Hot Storage backend)
- **Support:** support.wasabi.com
- **Phone:** [vendor contact]

---

**Document Owner:** Plattano Technical Team  
**Review Frequency:** Quarterly  
**Next Review:** March 2026
