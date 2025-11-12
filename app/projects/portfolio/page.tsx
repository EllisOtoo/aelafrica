"use client";

import { useMemo, useState } from "react";
import { portfolioProjects } from "@/app/data/projects";
import { Filter, Search, TableProperties } from "lucide-react";

const ITEMS_PER_PAGE_OPTIONS = [10, 20, 30];

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const services = useMemo(() => {
    const unique = Array.from(
      new Set(portfolioProjects.map((project) => project.service))
    );
    return unique.sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return portfolioProjects.filter((project) => {
      const matchesService =
        serviceFilter === "all" || project.service === serviceFilter;
      const matchesQuery =
        !normalizedQuery ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.client.toLowerCase().includes(normalizedQuery) ||
        project.contractValue.toLowerCase().includes(normalizedQuery);

      return matchesService && matchesQuery;
    });
  }, [query, serviceFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / itemsPerPage)
  );

  const currentProjects = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, page, itemsPerPage]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const handleServiceChange = (value: string) => {
    setServiceFilter(value);
    setPage(1);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setPage(1);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
  };

  return (
    <div className="bg-[#F8F6F2] text-[#1F140C]">
      <section className="mx-auto w-full max-w-6xl px-5 pt-32 pb-16 sm:px-8 md:px-10 lg:px-16 lg:pt-40 lg:pb-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F0DCC5] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#7F4511]">
              Portfolio
            </span>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#2C1404] sm:text-[52px]">
                Explore our portfolio
              </h1>
              <p className="text-lg leading-relaxed text-[#4A3526] lg:max-w-2xl">
                Browse decades of plumbing and civil engineering work delivered
                across Ghana. Filter by service or client to find projects
                similar to yours, and review the scale of contracts we have
                successfully completed.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#F0E6D8] bg-white px-6 py-5 text-sm text-[#4A3526] shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:max-w-sm">
            <p className="font-semibold text-[#7F4511]">
              {portfolioProjects.length} completed engagements
            </p>
            <p className="mt-2 text-sm">
              Every record represents a fully delivered mandate with documented
              completion and sign-off.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-5 py-10 sm:px-8 md:px-10 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-4 rounded-3xl border border-[#F0E6D8] bg-[#FFFDF9] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <label className="relative flex w-full items-center rounded-2xl border border-[#E0D8CC] bg-white px-3 py-2 text-sm text-[#4A3526] focus-within:border-[#7F4511]">
                <Search className="mr-2 h-4 w-4 text-[#A5621C]" aria-hidden />
                <span className="sr-only">Search portfolio</span>
                <input
                  className="w-full bg-transparent focus:outline-none"
                  type="text"
                  placeholder="Search by project, client, or value"
                  value={query}
                  onChange={(event) => handleQueryChange(event.target.value)}
                />
              </label>
              <label className="relative flex w-full items-center rounded-2xl border border-[#E0D8CC] bg-white px-3 py-2 text-sm text-[#4A3526] sm:max-w-xs">
                <Filter className="mr-2 h-4 w-4 text-[#A5621C]" aria-hidden />
                <span className="sr-only">Filter by service</span>
                <select
                  className="w-full bg-transparent focus:outline-none"
                  value={serviceFilter}
                  onChange={(event) => handleServiceChange(event.target.value)}
                >
                  <option value="all">All services</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A5621C]">
              <TableProperties className="h-4 w-4" aria-hidden />
              Showing {currentProjects.length} of {filteredProjects.length}{" "}
              projects
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#F0E6D8]">
            <table className="min-w-full border-collapse text-left text-sm text-[#2C1404]">
              <thead className="bg-[#7F4511] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">S/N</th>
                  <th className="px-4 py-3 font-semibold">Project & Location</th>
                  <th className="px-4 py-3 font-semibold">
                    Client / Consultant
                  </th>
                  <th className="px-4 py-3 font-semibold">Service Provided</th>
                  <th className="px-4 py-3 font-semibold">
                    Final Contract Value (GHS & USD)
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Completion %
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentProjects.map((project, index) => (
                  <tr
                    key={project.id}
                    className={index % 2 === 0 ? "bg-[#FFF8EF]" : "bg-white"}
                  >
                    <td className="px-4 py-4 font-semibold text-[#7F4511]">
                      {project.id}
                    </td>
                    <td className="px-4 py-4">{project.description}</td>
                    <td className="px-4 py-4">{project.client}</td>
                    <td className="px-4 py-4">{project.service}</td>
                    <td className="px-4 py-4 font-semibold">
                      {project.contractValue}
                    </td>
                    <td className="px-4 py-4">{project.completion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-[#F0E6D8] bg-[#FFFDF9] px-5 py-4 text-sm text-[#4A3526] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span>Rows per page:</span>
              <select
                className="rounded-full border border-[#E0D8CC] px-3 py-1 text-sm"
                value={itemsPerPage}
                onChange={(event) =>
                  handleItemsPerPageChange(Number(event.target.value))
                }
              >
                {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-full border border-[#E0D8CC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4511] disabled:opacity-40"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4511]">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="rounded-full border border-[#E0D8CC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4511] disabled:opacity-40"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
