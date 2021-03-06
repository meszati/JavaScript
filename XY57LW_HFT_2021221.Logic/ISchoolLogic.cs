using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XY57LW_HFT_2021221.Models;

namespace XY57LW_HFT_2021221.Logic
{
    public interface ISchoolLogic
    {
        void Create(School school);

        void Delete(int id);

        School Read(int id);

        IEnumerable<School> ReadAll();

        void Update(School school);
    }
}
