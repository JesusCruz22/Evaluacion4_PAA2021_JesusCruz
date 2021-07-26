using System;
using Microsoft.EntityFrameworkCore;

namespace Evaluacion4_PAA2021_JesusCruz.Model
{
    public class Database : DbContext
    {
        private static Database _database;
        private const string ConnectionString = "server=localhost;port=3306;database=monitoreo_celdas;user=root;";
        
        private Database() {}
        
        public static Database GetInstance()
        {
            return _database ?? new Database();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(ConnectionString,
                new MySqlServerVersion(new Version(8, 0, 11))); 
        }
        
        public DbSet<Celda> Celdas { get; set; }
        public DbSet<Banco> Bancos { get; set; }
        public DbSet<Limite> Limites { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Celda>().HasKey(celda => celda.Id);
            modelBuilder.Entity<Banco>().HasKey(banco => banco.Id);
            modelBuilder.Entity<Limite>().HasKey(limite => limite.Id);
            
            modelBuilder.Entity<Celda>()
                .HasOne(s => s.Banco)
                .WithMany(g => g.Celdas)
                .HasForeignKey(s => s.BancoId);

            modelBuilder.Entity<Limite>().Property(s => s.TemperaturaMinima).HasDefaultValue(0).IsRequired();
            modelBuilder.Entity<Limite>().Property(s => s.TemperaturaMaxima).HasDefaultValue(0).IsRequired();
            modelBuilder.Entity<Limite>().Property(s => s.VoltajeMinimo).HasDefaultValue(0).IsRequired();
            modelBuilder.Entity<Limite>().Property(s => s.VoltajeMaximo).HasDefaultValue(0).IsRequired();
            modelBuilder.Entity<Limite>().Property(s => s.NivelMinimo).HasDefaultValue(0).IsRequired();
            modelBuilder.Entity<Limite>().Property(s => s.NivelMaximo).HasDefaultValue(0).IsRequired();
            modelBuilder.Entity<Limite>().Property(s => s.FlujoMinimo).HasDefaultValue(0).IsRequired();
            modelBuilder.Entity<Limite>().Property(s => s.FlujoMaximo).HasDefaultValue(8).IsRequired();

        }
    }
}
