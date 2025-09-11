import React from "react";
import "./Frontend.css";

export default function Linux() {
  const steps = [
    {
      title: "Step 1: Linux Fundamentals",
      items: [
        "Understand what Linux is and its core distributions (Ubuntu, CentOS, Fedora, etc.).",
        "Learn the Linux filesystem hierarchy (/bin, /usr, /etc, /var, etc.).",
        "Use essential shell commands: ls, cd, pwd, cp, mv, rm, touch, cat, echo.",
        "Understand file permissions and ownership (chmod, chown, chgrp).",
        "Edit files with editors like nano, vim, or emacs."
      ],
    },
    {
      title: "Step 2: Shell Scripting & Process Management",
      items: [
        "Write basic Bash scripts for automation.",
        "Learn how to use variables, loops, and conditionals in shell scripts.",
        "Manage running processes using ps, top, kill, and systemctl.",
        "Schedule tasks with cron jobs.",
        "Redirect input/output using >, >>, |, and &."
      ],
    },
    {
      title: "Step 3: Package Management & Networking",
      items: [
        "Manage software using package managers (apt, yum, pacman).",
        "Set environment variables and aliases in bashrc/zshrc.",
        "Use networking tools: ping, netstat, curl, wget, ifconfig/ip, ssh.",
        "Configure network interfaces and hosts file.",
        "Understand how to work with firewalls using ufw or iptables."
      ],
    },
    {
      title: "Step 4: User & Permission Management",
      items: [
        "Create and manage users and groups.",
        "Manage sudo privileges and access controls.",
        "Understand file system quotas and security best practices.",
        "Implement disk partitioning and mounting using fdisk, mount, umount."
      ],
    },
    {
      title: "Step 5: Advanced Topics",
      items: [
        "Learn about system performance monitoring (htop, iostat, vmstat).",
        "Understand service management with systemd and init.d.",
        "Backup and restore files using tar and rsync.",
        "Explore kernel tuning and optimization (sysctl).",
        "Prepare for certifications like LFCS or RHCSA (optional)."
      ],
    }
  ];

  return (
    <div className="O">
      <h1 className="frontend-title">Linux Roadmap</h1>
      <p className="frontend-description">
        Follow this roadmap to master Linux system administration and shell scripting fundamentals.
      </p>

      {steps.map((section, index) => (
        <div key={index} className="frontend-section">
          <h2 className="frontend-step-title">{section.title}</h2>
          <ul className="frontend-list">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
