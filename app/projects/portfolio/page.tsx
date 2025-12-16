"use client";

import { useMemo, useState } from "react";
import { portfolioProjects } from "@/app/data/projects";
import { Filter, Search, TableProperties } from "lucide-react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const ITEMS_PER_PAGE_OPTIONS = [10, 20, 30];

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

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
        project.client.toLowerCase().includes(normalizedQuery);

      return matchesService && matchesQuery;
    });
  }, [query, serviceFilter]);

  const maxPage = useMemo(() => {
    return Math.max(
      0,
      Math.ceil(filteredProjects.length / paginationModel.pageSize) - 1
    );
  }, [filteredProjects.length, paginationModel.pageSize]);

  const currentPage = Math.min(paginationModel.page, maxPage);

  const visibleProjectsCount = useMemo(() => {
    const start = currentPage * paginationModel.pageSize;
    return Math.max(
      0,
      Math.min(paginationModel.pageSize, filteredProjects.length - start)
    );
  }, [currentPage, filteredProjects.length, paginationModel.pageSize]);

  const clampedPaginationModel = useMemo(
    () => ({ ...paginationModel, page: currentPage }),
    [currentPage, paginationModel]
  );

  const columns = useMemo<GridColDef[]>(
    () => [
      {
        field: "description",
        headerName: "Project & Location",
        flex: 1.6,
        minWidth: 260,
      },
      {
        field: "client",
        headerName: "Client / Consultant",
        flex: 1.2,
        minWidth: 220,
      },
      {
        field: "service",
        headerName: "Service Provided",
        flex: 1.2,
        minWidth: 220,
      },
    ],
    []
  );

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPaginationModel((current) => ({ ...current, page: 0 }));
  };

  const handleServiceChange = (value: string) => {
    setServiceFilter(value);
    setPaginationModel((current) => ({ ...current, page: 0 }));
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
                  placeholder="Search by project or client"
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
              Showing {visibleProjectsCount} of {filteredProjects.length} projects
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#F0E6D8]">
            <DataGrid
              rows={filteredProjects}
              columns={columns}
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
              }
              pagination
              paginationModel={clampedPaginationModel}
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={ITEMS_PER_PAGE_OPTIONS}
              disableRowSelectionOnClick
              sx={{
                border: "none",
                "--DataGrid-containerBackground": "#7F4511",
                "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader": {
                  backgroundColor: "#7F4511 !important",
                  color: "#ffffff",
                  borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: 600,
                },
                "& .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "& .MuiDataGrid-row.even": {
                  backgroundColor: "#FFF8EF",
                },
                "& .MuiDataGrid-row.odd": {
                  backgroundColor: "#ffffff",
                },
                "& .MuiDataGrid-cell": {
                  borderBottomColor: "#F0E6D8",
                  color: "#2C1404",
                },
                "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
                  outline: "none",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTopColor: "#F0E6D8",
                  backgroundColor: "#FFFDF9",
                },
                "& .MuiTablePagination-root": {
                  color: "#4A3526",
                },
                "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                  {
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                    color: "#7F4511",
                  },
                "& .MuiTablePagination-actions button": {
                  color: "#7F4511",
                },
              }}
              autoHeight
            />
          </div>
        </div>
      </section>
    </div>
  );
}
